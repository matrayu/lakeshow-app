import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeSplash from '../HomeSplash/HomeSplash'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignupPage from '../../routes/SignupPage/SignupPage'
import TicketListPage from '../../routes/TicketListPage/TicketListPage';
import SeatsPage from '../../routes/SeatsPage/SeatsPage';
import MainHeader from '../MainHeader/MainHeader';
import MainFooter from '../MainFooter/MainFooter';
import TicketPage from '../../routes/TicketPage/TicketPage';
import FaqPage from '../../routes/FaqPage/FaqPage'
import CartPage from '../../routes/CartPage/CartPage'
import CheckoutPage from '../../routes/CheckoutPage/CheckoutPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import { withRouter } from "react-router";
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service.js';
import TicketListContext from '../../contexts/TicketListContext'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null,
      hasError: false
    };
  }

  static contextType = TicketListContext
  
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillMount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }


  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          {(this.props.location.pathname === '/') ? '' : <MainHeader />}
        </header>
        <main className='App__main'>
          <Switch>
            <Route exact path={'/'} component={HomeSplash} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/signup'} component={SignupPage} />
            <Route path={'/tickets'} component={TicketListPage} />
            <Route path={'/seats'} component={SeatsPage} />
            <Route path={'/ticket/:ticketId'} component={TicketPage} />
            <Route path={'/faq'} component={FaqPage} />
            <Route path={'/cart'} component={CartPage} />
            <Route path={'/checkout'} component={CheckoutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <MainFooter />
        </footer>
      </div>
    )
  }
}

export default withRouter(App);

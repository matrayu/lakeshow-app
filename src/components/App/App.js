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
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import { withRouter } from "react-router";
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service.js';
import TicketListContext from '../../contexts/TicketListContext';
import PurchaseComplete from '../../routes/PurchaseComplete/PurchaseComplete';
import ForgotPasswordPage from '../../routes/ForgotPassword/ForgotPasswordPage';
import ResetPasswordPage from '../../routes/ResetPasswordPage/ResetPasswordPage';
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
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentDidUpdate({ location, history }) {
    const gtag = window.gtag
    
    if (location.pathname === this.props.location.pathname) {
      return
    }

    if (history.action === 'PUSH' && typeof(gtag) === 'function') {
      gtag('config', 'UA-126240273-2', {
        'page_location': window.location.href,
        'page_path': location.pathname
      })
    }
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  appHeader() {
    return (
      <header className='App__header'>
        <MainHeader />
      </header>
    )
  }


  render() {
    return (
      <div className='App'>
        {(this.props.location.pathname === '/' || this.props.location.pathname === '/success') 
          ? '' 
          : this.appHeader()
        }
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
            <Route path={'/success'} component={PurchaseComplete} />
            <Route path={'/forgot_password/'} component={ForgotPasswordPage} />
            <Route path={'/reset_password/:resetId'} component={ResetPasswordPage} />
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

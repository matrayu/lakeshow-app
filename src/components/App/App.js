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
import './App.css';


class App extends Component {

  render() {
    console.log(this.props.location.pathname)
    return (
      <main className='App'>
        {(this.props.location.pathname === '/') ? '' : <MainHeader />}
        <Switch>
          <Route exact path={'/'} component={HomeSplash} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/signup'} component={SignupPage} />
          <Route path={'/tickets'} component={TicketListPage} />
          <Route path={'/seats'} component={SeatsPage} />
          <Route path={'/ticket/:ticketId'} component={TicketPage} />
          <Route path={'/faq'} component={FaqPage} />
          <Route path={'/cart'} component={CartPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <MainFooter />
      </main>
    )
  }
}

export default withRouter(App);

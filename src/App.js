import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeSplash from './components/HomeSplash/HomeSplash'
import LoginPage from './routes/LoginPage/LoginPage'
import SignupPage from './routes/SignupPage/SignupPage'
import TicketsPage from './routes/TicketsPage/TicketsPage';
import SeatsPage from './routes/SeatsPage/SeatsPage';
import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from './components/MainFooter/MainFooter';
import { withRouter } from "react-router";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.location.pathname)
    return (
      <main className='App'>
        {(this.props.location.pathname === '/') ? '' : <MainHeader />}
        <Switch>
          <Route exact path={'/'} component={HomeSplash} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/signup'} component={SignupPage} />
          <Route path={'/tickets'} component={TicketsPage} />
          <Route path={'/seats'} component={SeatsPage} />
        </Switch>
        <MainFooter />
      </main>
    )
  }
}

export default withRouter(App);

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeSplash from './components/HomeSplash/HomeSplash'
import LoginPage from './routes/LoginPage/LoginPage'
import SignupPage from './routes/SignupPage/SignupPage'
import TicketsPage from './routes/TicketsPage/TicketsPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Switch>
          <Route exact path={'/'} component={HomeSplash} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/signup'} component={SignupPage} />
          <Route path={'/tickets'} component={TicketsPage} />
        </Switch>
      </main>
    )
  }
}

export default App;

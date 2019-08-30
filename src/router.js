import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import NoFount from './pages/noFount'

export default class MyRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path='/home' component={Home}></Route>
            <Route component={NoFount}></Route>
          </Switch>
        </App>
      </Router>
    );
  }
}
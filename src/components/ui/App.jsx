import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import PrivateRoute from '../misc/PrivateRoute'

import Navbar from '../containers/Navbar'
import Login from '../containers/Login'
import URLs from '../containers/URLs'

const Home = () =>
  <div>
    <p>This is the test home element</p>
  </div>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div id='errors'>
            {this.props.errors.map((error, i) => <p key={i} className='alert alert-danger'>{error}</p>)}
          </div>

          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/urls' component={URLs} />
        </div>
      </Router>
    )
  }
}

export default App

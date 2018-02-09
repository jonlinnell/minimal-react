import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/fontawesome-free-solid'

import PrivateRoute from '../misc/PrivateRoute'

import Navbar from '../containers/Navbar'
import ClientError from '../containers/ClientError'
import Login from '../containers/Login'
import Links from '../containers/Links'

import history from '../../history'

const DefaultHome = () =>
  <div className='jumbotron col-sm-8 offset-sm-2'>
    <h1 className='display-4'>Login</h1>
    <p className='lead'>Please login to Ricochet with your account details to view and manage links, and see statistics and usage data.</p>
    <LinkContainer to='/login'>
      <button className='btn btn-primary'>
        <FontAwesomeIcon className='mr-2' icon={ faSignInAlt } />
        Login
      </button>
    </LinkContainer>
  </div>

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <div id='errors'>
            {this.props.errors.map((error, i) => <ClientError key={i} index={i} error={error} />)}
          </div>

          <Route exact path='/' component={this.props.auth.isAuthenticated ? null : DefaultHome} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/links' component={Links} />
        </div>
      </Router>
    )
  }
}

export default App

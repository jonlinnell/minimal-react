import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/fontawesome-free-solid'

import PrivateRoute from '../PrivateRoute'

import ClientError from '../ClientError'
import LinksView from '../LinksView'
import Login from '../Login'
import Navbar from '../Navbar'
import SettingsView from '../SettingsView'

import history from '../../history'

const DefaultHome = () =>
  <div className='col-xs-12 col-sm-8 offset-sm-2 px-4 mt-5'>
    <h1 className='display-4 mb-3'>Login</h1>
    <p className='text-secondary'>In order to view and manage links, statistics, users, and settings, you must log in.</p>
    <LinkContainer to='/login'>
      <button className='btn btn-primary'>
        <FontAwesomeIcon className='mr-2' icon={ faSignInAlt } />
        Login
      </button>
    </LinkContainer>
  </div>

class MainView extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <div id='errors'>
            {this.props.errors.map((error, i) => <ClientError key={i} index={i} error={error} />)}
          </div>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-12 col-md-8 offset-md-2'>
                <Route exact path='/' component={this.props.auth.isAuthenticated ? null : DefaultHome} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/links' component={LinksView} />
                <PrivateRoute path='/settings' component={SettingsView} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default MainView
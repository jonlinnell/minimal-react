import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'

import {
  faLink,
  faChartLine,
  faCog,
  faSignInAlt as faSignIn,
  faSignOutAlt as faSignOut
} from '@fortawesome/fontawesome-free-solid'

class Navbar extends Component {
  render() {
    const navbarItemsAuthenticated = [
      <LinkContainer to='/links' key='links'>
        <button type='button' className='btn btn-secondary'>
          <FontAwesomeIcon icon={ faLink } className='mr-2' />
          Links
        </button>
      </LinkContainer>,
      <LinkContainer to='/statistics' key='statistics'>
        <button type='button' className='btn btn-secondary'>
          <FontAwesomeIcon icon={ faChartLine } className='mr-2' />
          Statistics
        </button>
      </LinkContainer>,
      <LinkContainer to='/settings' key='settings'>
        <button type='button' className='btn btn-secondary'>
          <FontAwesomeIcon icon={ faCog } className='mr-2' />
          Settings
        </button>
      </LinkContainer>,
      <button type='button' className='btn btn-secondary' key='logout' onClick={() => this.props.onLogout(this.props.history)} href='logout'>
        <FontAwesomeIcon icon={ faSignOut } className='mr-2' />
        Logout ({this.props.auth.user})
      </button>
    ]

    const navbarItemsUnauthenticated = [
      <LinkContainer to='/login' key='login'>
        <button type='button' className='btn btn-secondary'>
          <FontAwesomeIcon icon={ faSignIn } className='mr-2' />
          Login
        </button>
      </LinkContainer>
    ]

    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
          <a className='navbar-brand'>MRBP</a>
            <div className='btn-group btn-group-sm ml-auto' role='group' aria-label='Navigation'>
              {this.props.auth.isAuthenticated
                ? navbarItemsAuthenticated
                : navbarItemsUnauthenticated}
            </div>
        </nav>
    )
  }
}

export default Navbar


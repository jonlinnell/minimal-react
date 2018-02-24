import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import {
  faLink,
  faChartLine,
  faCog,
  faSignInAlt as faSignIn,
  faSignOutAlt as faSignOut
} from '@fortawesome/fontawesome-free-solid'

import history from '../../history'

const checkActivePage = (page) => {
  const baseClasses = ['nav-link']
  if (history.location.pathname === page) {
    return [...baseClasses, 'active'].join(' ')
  } else {
    return baseClasses.join(' ')
  }
}

class Navbar extends Component {
  render() {
    const navbarItemsAuthenticated = [
      <li className='nav-item' key='links'>
        <Link className={checkActivePage('/links')} to='/links'>
          <FontAwesomeIcon icon={ faLink } className='mr-2' />
          Links
        </Link>
      </li>,
      <li className='nav-item' key='statistics'>
        <Link className={checkActivePage('/statistics')} to='/statistics'>
          <FontAwesomeIcon icon={ faChartLine } className='mr-2' />
          Statistics
        </Link>
      </li>,
      <li className='nav-item' key='settings'>
        <Link className={checkActivePage('/settings')} to='/settings'>
          <FontAwesomeIcon icon={ faCog } className='mr-2' />
          Settings
        </Link>
      </li>,
      <li className='nav-item' key='onLogout'>
        <a className='nav-link' href='#logout' onClick={() => this.props.onLogout(this.props.history)}>
          <FontAwesomeIcon icon={ faSignOut } className='mr-2' />
          Logout ({this.props.auth.user})
        </a>
      </li>
    ]

    const navbarItemsUnauthenticated = [
      <li className='nav-item' key='login'>
        <Link className={checkActivePage('/login')} to='/login'>
          <FontAwesomeIcon icon={ faSignIn } className='mr-2' />
          Login
        </Link>
      </li>
    ]

    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
          <a className='navbar-brand'>Ricochet Web</a>
            <ul className='nav justify-content-end ml-auto' role='group' aria-label='Navigation'>
              {this.props.auth.isAuthenticated
                ? navbarItemsAuthenticated
                : navbarItemsUnauthenticated}
            </ul>
        </nav>
    )
  }
}

export default Navbar


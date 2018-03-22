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

import Hamburger from '../containers/Hamburger'

const checkActivePage = (page) => { // THIS DOESN'T WORK. Wrap components in HOC?
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
      <div className='container-fluid p-0'>
        <div className='w-100 nav-bg'>
          <nav className='navbar navbar-expand-lg align-items-center navbar-dark col-sm-12 col-md-8 offset-md-2'>
            <a className='navbar-brand'>Ricochet Web</a>
            <Hamburger />
            <div className='collapse navbar-collapse' id='navbar'>
              <ul className='navbar-nav justify-content-end ml-auto' role='group' aria-label='Navigation'>
                {this.props.auth.isAuthenticated
                  ? navbarItemsAuthenticated
                  : navbarItemsUnauthenticated}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar


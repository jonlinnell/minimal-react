import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { NavLink, Link } from 'react-router-dom'

import {
  faLink,
  faChartLine,
  faCog,
  faSignInAlt as faSignIn,
  faSignOutAlt as faSignOut,
} from '@fortawesome/fontawesome-free-solid'

import Hamburger from '../Hamburger'

import './styles.css'

class Navbar extends Component {
  render() {
    const navbarItemsAuthenticated = [
      <li key="links">
        <NavLink className="nav-link" activeClassName="nav-active" to="/links">
          <FontAwesomeIcon icon={faLink} className="mr-2" />
          Links
        </NavLink>
      </li>,
      <li key="statistics">
        <NavLink className="nav-link" activeClassName="nav-active" to="/statistics">
          <FontAwesomeIcon icon={faChartLine} className="mr-2" />
          Statistics
        </NavLink>
      </li>,
      <li key="settings">
        <NavLink className="nav-link" activeClassName="nav-active" to="/settings">
          <FontAwesomeIcon icon={faCog} className="mr-2" />
          Settings
        </NavLink>
      </li>,
      <li key="onLogout">
        <a className="nav-link" href="#logout" onClick={() => this.props.onLogout(this.props.history)}>
          <FontAwesomeIcon icon={faSignOut} className="mr-2" />
          Logout ({this.props.auth.user})
        </a>
      </li>,
    ]

    const navbarItemsUnauthenticated = [
      <li key="login">
        <Link className="nav-link" to="/login">
          <FontAwesomeIcon icon={faSignIn} className="mr-2" />
          Login
        </Link>
      </li>,
    ]

    return (
      <div className="container-fluid p-0">
        <div className="w-100 nav-bg">
          <nav className="navbar navbar-expand-lg align-items-center navbar-dark col-sm-12 col-md-8 offset-md-2">
            <a className="navbar-brand">Ricochet</a>
            <Hamburger />
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav justify-content-end ml-auto" role="group" aria-label="Navigation">
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


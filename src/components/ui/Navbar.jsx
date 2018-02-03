import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

class Navbar extends Component {
  render() {
    const navbarItemsAuthenticated = [
      <LinkContainer to='/urls' key='links'>
        <button type='button' className='btn btn-secondary'>
          <i className="fa fa-link mr-2" aria-hidden="true"></i>
          Links
        </button>
      </LinkContainer>,
      <LinkContainer to='/statistics' key='statistics'>
        <button type='button' className='btn btn-secondary'>
          <i className="fa fa-line-chart mr-2" aria-hidden="true"></i>
          Statistics
        </button>
      </LinkContainer>,
      <LinkContainer to='/settings' key='settings'>
        <button type='button' className='btn btn-secondary'>
          <i className="fa fa-cog mr-2" aria-hidden="true"></i>
          Settings
        </button>
      </LinkContainer>,
      <button type='button' className='btn btn-secondary' key='logout' onClick={this.props.onLogout} href='logout'>
        <i className="fa fa-sign-out mr-2" aria-hidden="true"></i>
        Logout ({this.props.auth.user})
      </button>
    ]

    const navbarItemsUnauthenticated = [
      <LinkContainer to='/login' key='login'>
        <button type='button' className='btn btn-secondary'>
          <i className="fa fa-sign-in mr-2" aria-hidden="true"></i>
          Login
        </button>
      </LinkContainer>,
      <LinkContainer to='/statistics' key='statistics'>
        <button type='button' className='btn btn-secondary'>
          <i className="fa fa-line-chart mr-2" aria-hidden="true"></i>
          Statistics
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


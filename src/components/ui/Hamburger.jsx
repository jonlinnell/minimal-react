import React, { Component } from 'react'

import '../../styles/hamburger.css'

class Hamburger extends Component {
  render() {
    return (
      <div className='navbar-toggler' data-toggle='collapse' data-target='#navbar' onClick={this.props.onClick}>
        <div id="hamburger" className={this.props.expanded ? 'open' : null}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}

export default Hamburger

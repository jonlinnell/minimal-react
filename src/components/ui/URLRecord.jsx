import React, { Component } from 'react'

class LinkRecord extends Component {
  render() {
    return (
      <li className='row list-group-item d-flex align-items-center justify-content-start'>
        <p className='col-sm-4 h4 m-0'>{this.props.url.title}</p>
        <a
          className='col-sm-8 h4 m-0 text-secondary url'
          href={this.props.url.url}
          title={this.props.url.url}
          target='_blank'
        >
          <em>{this.props.url.url}</em>
        </a>
      </li>
    )
  }
}

export default LinkRecord

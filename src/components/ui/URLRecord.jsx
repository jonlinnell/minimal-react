import React, { Component } from 'react'

class URLRecord extends Component {
  render() {
    return (
      <div className='row d-flex align-items-center my-2'>
        <p className='h3 m-0'>{this.props.url.title}</p>
        <i className="fa fa-arrow-right px-2"></i>
        <p className='h3 m-0'><em>{this.props.url.url}</em></p>
      </div>
    )
  }
}

export default URLRecord

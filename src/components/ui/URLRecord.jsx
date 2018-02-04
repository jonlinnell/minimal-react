import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'

class URLRecord extends Component {
  render() {
    return (
      <div className='row d-flex align-items-center my-2'>
        <p className='h3 m-0'>{this.props.url.title}</p>
        <FontAwesomeIcon icon={ faArrowRight } size='lg' className='mx-2'></FontAwesomeIcon>
        <p className='h3 m-0'><em>{this.props.url.url}</em></p>
      </div>
    )
  }
}

export default URLRecord

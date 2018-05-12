import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/fontawesome-free-solid'

class ClientError extends Component {
  render() {
    return (
      <p className='alert alert-danger col-sm-6 offset-sm-3 d-flex align-items-center justify-content-between'>
        {this.props.error}
        <FontAwesomeIcon icon={faTimes} onClick={() => this.props.onClearError(this.props.index)} />
      </p>
    )
  }
}

export default ClientError

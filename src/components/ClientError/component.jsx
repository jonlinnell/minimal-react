import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/fontawesome-free-solid'

import { clientErrorPropTypes } from '../../lib/propsValidation'

const ClientError = (props) => {
  const {
    error,
    onClearError,
  } = props

  return (
    <p className="alert alert-danger col-sm-6 offset-sm-3 d-flex align-items-center justify-content-between">
      {error.message}
      <FontAwesomeIcon icon={faTimes} onClick={() => onClearError(error.index)} />
    </p>
  )
}

ClientError.propTypes = clientErrorPropTypes

export default ClientError

import React from 'react'

import '../../styles/Spinner.css'

const Spinner = props =>
  (props.enabled
    ? <div className="spinner"></div>
    : null)

export default Spinner

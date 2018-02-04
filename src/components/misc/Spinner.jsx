import React from 'react'

import '../../styles/Spinner.css'

const Spinner = props =>
  (props.enabled
    ? <div className="loader"></div>
    : <div className="blank"></div>)

export default Spinner

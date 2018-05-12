import React from 'react'

import './styles.css'

const Spinner = props =>
  (props.enabled
    ? <div className="loader"></div>
    : <div className="blank"></div>)

export default Spinner

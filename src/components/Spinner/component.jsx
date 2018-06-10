import React from 'react'

import './styles.css'

const Spinner = props =>
  (props.enabled
    ? <div className="loader" />
    : <div className="blank" />)

export default Spinner

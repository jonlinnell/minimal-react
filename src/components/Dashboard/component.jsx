import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

import Guage from '../Guage'

class Dashboard extends PureComponent {
  componentDidMount() {
    this.props.loadURLCount()
    this.props.loadClickCount()
  }

  render() {
    const { clicks, urls } = this.props

    return (
      <div className="w-100 d-flex justify-content-center">
        <Guage label="Clicks" count={clicks} />
        <Guage label="URLs" count={urls} />
      </div>
    )
  }
}

Dashboard.propTypes = {
  clicks: propTypes.number.isRequired,
  urls: propTypes.number.isRequired,
  loadURLCount: propTypes.func.isRequired,
  loadClickCount: propTypes.func.isRequired,
}

export default Dashboard

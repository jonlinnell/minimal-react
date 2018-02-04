import React, { Component } from 'react'

import Spinner from '../misc/Spinner'

import URLRecord from '../containers/URLRecord'

class URLs extends Component {
  componentDidMount() {
    this.props.loadURLs()
  }

  render() {
    return (
      <div className='container container-fluid'>
        <Spinner enabled={this.props.data.isFetching} />
        {this.props.data.urls.map(record => <URLRecord url={record} key={record.id} />)}
      </div>
    )
  }
}

export default URLs

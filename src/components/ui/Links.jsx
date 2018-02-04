import React, { Component } from 'react'

import Spinner from '../misc/Spinner'

import URLRecord from '../containers/URLRecord'

class Links extends Component {
  componentDidMount() {
    this.props.loadURLs()
  }

  render() {
    return (
      <div className='container card card-body my-3'>
        <h3>Links</h3>
        <p className='lead'>All links currently registered.</p>
        <Spinner enabled={this.props.data.isFetching} />
        <ul className='list-group list-group-flush col-sm-12 p-0'>
          {this.props.data.urls.map(record => <URLRecord url={record} key={record.id} />)}
        </ul>
      </div>
    )
  }
}

export default Links

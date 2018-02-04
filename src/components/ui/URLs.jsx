import React, { Component } from 'react'
import URLRecord from '../containers/URLRecord'

class URLs extends Component {
  componentDidMount() {
    this.props.loadURLs()
  }

  render() {
    return (
      <div className='container container-fluid'>
        {this.props.data.isFetching
          ? <p>Loading</p>
          : this.props.data.urls.map(record => <URLRecord url={record} key={record.id} />)
        }
      </div>
    )
  }
}

export default URLs

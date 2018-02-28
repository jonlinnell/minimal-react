import React, { Component } from 'react'

import Spinner from '../misc/Spinner'

import URLRecord from '../containers/URLRecord'
import InlineLinkFormAdd from '../containers/InlineLinkFormAdd'
import ModalConfirmDelete from '../containers/ModalConfirmDelete'

class Links extends Component {
  componentWillMount() {
    this.props.loadURLs()
    this.props.loadClickCounts()
  }

  render() {
    return (
      <div className='container card card-body my-3'>
        <h3>Links</h3>
        <div className='w-100 d-flex justify-content-start align-items-center'>
          <p>All links currently registered.</p>
          <button className='btn btn-sm btn-outline-primary ml-auto' onClick={this.props.onSetAddingURL}>Add</button>
        </div>
        <Spinner enabled={this.props.fetching} />
        <ul className='list-group list-group-flush col-sm-12 p-0'>
          {this.props.activeUpdate.add
            ? <InlineLinkFormAdd />
            : null}
          {this.props.data.urls.map(record => <URLRecord url={record} key={record.id} />)}
          <ModalConfirmDelete />
        </ul>
      </div>
    )
  }
}

export default Links

import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/fontawesome-free-solid'

import Spinner from '../misc/Spinner'

import URLRecord from '../containers/URLRecord'
import InlineLinkFormAdd from '../containers/InlineLinkFormAdd'
import ModalConfirmDelete from '../containers/ModalConfirmDelete'

class Links extends Component {
  componentWillMount() {
    this.props.loadURLs()
    this.props.loadClicks()
  }

  render() {
    return (
      <div className='container card card-body my-3'>
        <div className='w-100 d-flex justify-content-start align-items-center mb-2'>
          <h3 className='m-0'>Links</h3>
          <button className='btn btn-outline-secondary ml-auto' onClick={this.props.onSetAddingURL}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <Spinner enabled={this.props.fetching} />
        <ul className='list-group list-group-flush col-sm-12 p-0'>
          {this.props.activeUpdate.add
            ? <InlineLinkFormAdd />
            : null}
          {this.props.data.map(record => <URLRecord url={record} key={record.id} />)}
          <ModalConfirmDelete />
        </ul>
      </div>
    )
  }
}

export default Links

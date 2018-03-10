import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/fontawesome-free-solid'

import Spinner from '../misc/Spinner'

import URLRecord from '../containers/URLRecord'
import InlineLinkFormAdd from '../containers/InlineLinkFormAdd'
import ModalConfirmDelete from '../containers/ModalConfirmDelete'

import '../../styles/Links.css'

class Links extends Component {
  componentWillMount() {
    this.props.loadURLs()
    this.props.loadClicks()
  }

  render() {
    let filterInput
    const { allURLs, filter } = this.props
    const links = filter
      ? allURLs.filter(i => i.title.toLowerCase().match(filter.toLowerCase()))
      : allURLs

    return (
      <div className='container card card-body my-3'>
        <div className='w-100 d-flex justify-content-start align-items-center mb-2'>
          <h3 className='m-0'>Links</h3>
          <button className='btn btn-sm btn-outline-secondary ml-auto' onClick={this.props.onSetAddingURL}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <Spinner enabled={this.props.fetching} />
        <input
          name='filter'
          ref={input => filterInput = input} // eslint-disable-line no-return-assign
          onChange={() => this.props.handleSetFilter(filterInput.value)}
          className='form-control input-filter p-1 mt-2'
          placeholder='Filter links...'
        />
        <ul className='list-group list-group-flush list-urls col-sm-12 p-0'>
          {this.props.activeUpdate.add
            ? <InlineLinkFormAdd />
            : null}
          {links.map(record => <URLRecord url={record} key={record.id} />)}
          <ModalConfirmDelete />
        </ul>
      </div>
    )
  }
}

export default Links

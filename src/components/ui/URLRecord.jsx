import React, { Component } from 'react'

import InlineLinkFormUpdate from '../containers/InlineLinkFormUpdate'

const linkActionClasses = ['text-secondary', 'ml-2', 'font-weight-light', 'link-action']

class LinkRecord extends Component {
  render() {
    const { id, title, url } = this.props.url

    return this.props.modify.id === id
      ? <InlineLinkFormUpdate />
      : <li className='list-group-item'>
          <div className='row d-flex align-items-center justify-content-start'>
            <p className='col-sm-4 h4 m-0 p-0'>{title}</p>
            <a
              className='col-sm-8 h4 m-0 p-0 text-secondary url'
              href={url}
              title={url}
              target='_blank'
            >
              <em>{url}</em>
            </a>
          </div>
          <div className='row d-flex align-items-center justify-content-end mt-2'>
            <a
              className={linkActionClasses.join(' ')}
              onClick={() => this.props.onSetModifyURL(id)}
              role='button'
            >
              Modify
            </a>
            <a className={linkActionClasses.join(' ')}>Stats</a>
            <a
              className={linkActionClasses.join(' ')}
              onClick={() => this.props.onSelectDeleteURL(id)}
              data-toggle='modal'
              data-target='#confirmDelete'
              role='button'
            >
              Delete
            </a>
          </div>
        </li>
  }
}

export default LinkRecord

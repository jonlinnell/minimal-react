import React, { Component } from 'react'

import InlineLinkFormUpdate from '../containers/InlineLinkFormUpdate'

import '../../styles/URLRecord.css'

const secondaryActionClasses = ['text-secondary', 'font-weight-light']
const linkActionClasses = [...secondaryActionClasses, 'link-action', 'ml-2']

class LinkRecord extends Component {
  constructor(props) {
    super(props)
    this.state = { clicks: props.clicks.count }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.clicks.count !== nextProps.clicks.count) {
      this.setState({ clicks: nextProps.clicks.count })
    }
  }

  render() {
    const { id, title, url } = this.props.url

    return this.props.modify.id === id
      ? <InlineLinkFormUpdate />
      : <li className='list-group-item'>
          <div className='row d-flex align-items-center justify-content-start'>
            <p className='col-sm-4 col-xs 12 h5 m-0 p-0'>{title}</p>
            <a
              className='col-sm-8 col-xs-12 h5 m-0 p-0 text-info url'
              href={url}
              title={url}
              target='_blank'
            >
              <em>{url}</em>
            </a>
          </div>
          <div className='row d-flex align-items-center justify-content-end mt-2'>
            <p className={[...secondaryActionClasses, 'm-0', 'mr-auto', 'click-count'].join(' ')}>
              {this.state.clicks}{this.state.clicks ? ' clicks' : null}
            </p>
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

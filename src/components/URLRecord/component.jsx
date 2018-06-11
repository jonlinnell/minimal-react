import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMousePointer, faCalendar } from '@fortawesome/fontawesome-free-solid'

import InlineLinkFormUpdate from '../InlineLinkFormUpdate'

import { formatDate } from '../../lib/dates'

import { urlRecordPropTypes } from '../../lib/propsValidation'

import './styles.scss'

const secondaryActionClasses = ['text-secondary', 'font-weight-light']
const linkActionClasses = [...secondaryActionClasses, 'link-action', 'ml-2']

const URLRecord = (props) => {
  const {
    onSelectDeleteURL,
    onSetModifyURL,
  } = props

  const {
    clicks,
    createdAt,
    id,
    title,
    url,
  } = props.url

  return props.modify.id === id
    ? <InlineLinkFormUpdate />
    : <li className="list-group-item">
      <div className="row d-flex align-items-center justify-content-start">
        <p className="col-sm-4 col-xs 12 text-title m-0 p-0">{title}</p>
        <a
          className="col-sm-8 col-xs-12 m-0 p-0 text-url"
          href={url}
          title={url}
          target="_blank"
        >
          {url}
        </a>
      </div>
      <div className="row d-flex align-items-center justify-content-end mt-2">
        <div className={[...secondaryActionClasses, 'm-0', 'mr-auto', 'click-count'].join(' ')}>
          {clicks ? <span className="mr-3"><FontAwesomeIcon className="mr-0 fa-info" icon={faMousePointer} /> {clicks}</span> : null}
          <span><FontAwesomeIcon className="mr-1 fa-info" icon={faCalendar} />{formatDate(createdAt)}</span>
        </div>
        <button
          className={linkActionClasses.join(' ')}
          onClick={() => onSetModifyURL(id)}
        >
            Modify
        </button>
        <button
          className={linkActionClasses.join(' ')}
        >
            Stats
        </button>
        <button
          className={linkActionClasses.join(' ')}
          onClick={() => onSelectDeleteURL(id)}
          data-toggle="modal"
          data-target="#confirmDeleteURL"
        >
            Delete
        </button>
      </div>
    </li> // eslint-disable-line react/jsx-closing-tag-location
}

URLRecord.propTypes = urlRecordPropTypes

export default URLRecord

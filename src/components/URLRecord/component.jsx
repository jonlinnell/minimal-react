import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMousePointer, faCalendar } from '@fortawesome/fontawesome-free-solid'

import InlineLinkFormUpdate from '../InlineLinkFormUpdate'

import { formatDate } from '../../lib/dates'

import './styles.scss'

import { linkRecordPropTypes } from '../../lib/propsValidation'

const secondaryActionClasses = ['text-secondary', 'font-weight-light']
const linkActionClasses = [...secondaryActionClasses, 'link-action', 'ml-2']

const LinkRecord = (props) => {
  const {
    id,
    title,
    url,
    clicks,
    createdAt,
  } = props.url

  return props.modify.id === id
    ? <InlineLinkFormUpdate />
    :
    <li className="list-group-item">
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
        <a
          className={linkActionClasses.join(' ')}
          onClick={() => props.onSetModifyURL(id)}
          role="button"
          href="/modify"
          tabIndex={0}
        >
            Modify
        </a>
        <a
          className={linkActionClasses.join(' ')}
          href="/stats"
          tabIndex={-1}
        >
            Stats
        </a>
        <a
          className={linkActionClasses.join(' ')}
          onClick={() => props.onSelectDeleteURL(id)}
          data-toggle="modal"
          data-target="#confirmDeleteURL"
          role="button"
          href="/delete"
          tabIndex={-1}
        >
            Delete
        </a>
      </div>
    </li>
}

LinkRecord.propTypes = linkRecordPropTypes

export default LinkRecord

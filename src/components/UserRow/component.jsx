import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faTimes,
  faEdit,
} from '@fortawesome/fontawesome-free-solid'

import { userRowPropTypes } from '../../lib/propsValidation'

const UserRow = (props) => {
  const { onSelectDeleteUser, onSetModifyUser } = props
  const { username, id, createdAt } = props.user

  return (
    <tr>
      <td>{username}</td>
      <td>{createdAt}</td>
      <td>
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => onSetModifyUser(id)}
          role="button"
          data-toggle="modal"
          data-target="#updateUserPassword"
        />
      </td>
      {
        username === 'admin'
        ? <td />
        : <td>
          <button
            onClick={() => onSelectDeleteUser(username)}
            data-toggle="modal"
            data-target="#confirmDeleteUser"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </td> // eslint-disable-line react/jsx-closing-tag-location
      }
    </tr>
  )
}

UserRow.propTypes = userRowPropTypes

export default UserRow

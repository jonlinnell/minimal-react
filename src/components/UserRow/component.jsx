import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faTimes,
  faEdit,
} from '@fortawesome/fontawesome-free-solid'

import { userRowPropTypes } from '../../lib/propsValidation'

const UserRow = (props) => {
  const { onSetDeleteUser, onSetModifyUser } = props
  const { username, id, createdAt } = props.user

  return (
    <tr>
      <td>{username}</td>
      <td>{createdAt}</td>
      <td>
        <button>
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => onSetModifyUser(id)}
            role="button"
            data-toggle="modal"
            data-target="#updateUserPassword"
          />
        </button>
      </td>
      {
        username === 'admin'
        ? <td />
        :
        <td>
          <button
            onClick={() => onSetDeleteUser(username)}
            data-toggle="modal"
            data-target="#confirmDeleteUser"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </td>
      }
    </tr>
  )
}

UserRow.propTypes = userRowPropTypes

export default UserRow

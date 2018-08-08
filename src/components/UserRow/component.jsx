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
      <td className="d-flex justify-content-end">
        <button
          className="btn btn-light"
          onClick={() => onSetModifyUser(id)}
          data-toggle="modal"
          data-target="#updateUserPassword"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        {
          username === 'admin'
          ? null
          :
          <button
            className="btn btn-light"
            onClick={() => onSetDeleteUser(username)}
            data-toggle="modal"
            data-target="#confirmDeleteUser"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        }
      </td>
    </tr>
  )
}

UserRow.propTypes = userRowPropTypes

export default UserRow

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
        :
        <td>
          <a
            onClick={() => onSelectDeleteUser(username)}
            data-toggle="modal"
            data-target="#confirmDeleteUser"
            role="button"
            href="/delete"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </td>
      }
    </tr>
  )
}

UserRow.propTypes = userRowPropTypes

export default UserRow

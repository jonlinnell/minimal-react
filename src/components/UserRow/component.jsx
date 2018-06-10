import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faTimes,
  faEdit,
} from '@fortawesome/fontawesome-free-solid'

class UserRow extends Component {
  render() {
    const { onSelectDeleteUser, onSetModifyUser } = this.props
    const { username, id, createdAt } = this.props.user

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
            <a
              onClick={() => onSelectDeleteUser(username)}
              data-toggle="modal"
              data-target="#confirmDeleteUser"
              role="button"
            >
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </td>
        }
      </tr>
    )
  }
}

export default UserRow

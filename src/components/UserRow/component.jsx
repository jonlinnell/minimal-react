import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faTimes,
  faEdit,
} from '@fortawesome/fontawesome-free-solid'

class UserRow extends Component {
  render() {
    const { onSelectDeleteUser } = this.props
    const { username, createdAt } = this.props.user

    return (
      <tr>
        <td>{username}</td>
        <td>{createdAt}</td>
        <td><FontAwesomeIcon icon={ faEdit } /></td>
        {
          username === 'admin'
          ? <td></td>
          : <td>
              <a
                onClick={() => onSelectDeleteUser(username)}
                data-toggle='modal'
                data-target='#confirmDeleteUser'
                role='button'
              >
              <FontAwesomeIcon icon={ faTimes } />
            </a>
          </td>
        }
      </tr>
    )
  }
}

export default UserRow

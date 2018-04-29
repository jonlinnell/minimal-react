import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faTimes,
  faEdit
} from '@fortawesome/fontawesome-free-solid'

class Users extends Component {
  componentWillMount() {
    this.props.loadUserList()
  }

  render() {
    const { users } = this.props

    return (
      <div className='card'>
        <div className='card-header'>
          Users
        </div>
        <div className='card-body'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Username</th>
                <th scope='col'>Date Created</th>
                <th scope='col'></th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
            {
              users.map(user =>
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.createdAt}</td>
                  <td><FontAwesomeIcon icon={ faEdit } /></td>
                  <td><FontAwesomeIcon icon={ faTimes } /></td>
                </tr>)
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Users

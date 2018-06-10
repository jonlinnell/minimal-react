import React, { Component } from 'react'
import ModalUpdateUserPassword from '../ModalUpdateUserPassword'

import UserRow from '../UserRow'

class Users extends Component {
  componentDidMount() {
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
              users.map(user => <UserRow user={user} key={user.username} />)
            }
            </tbody>
          </table>
        </div>

        <ModalUpdateUserPassword />
      </div>
    )
  }
}

export default Users

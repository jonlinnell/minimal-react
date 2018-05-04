import React, { Component } from 'react'

import UserRow from '../containers/UserRow'

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
              users.map(user => <UserRow user={user} key={user.username} />)
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Users

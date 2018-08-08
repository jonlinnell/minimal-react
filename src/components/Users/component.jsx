import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/fontawesome-free-solid'

import ModalUpdateUserPassword from '../ModalUpdateUserPassword'
import ModalCreateUser from '../ModalCreateUser'
import UserRow from '../UserRow'

import { usersPropTypes } from '../../lib/propsValidation'

class Users extends Component {
  componentDidMount() {
    this.props.loadUserList()
  }

  render() {
    const { users } = this.props

    return (
      <div className="card">
        <div className="card-header">
          Users
        </div>
        <div className="card-body">
          <FontAwesomeIcon
            icon={faUserPlus}
            role="button"
            data-toggle="modal"
            data-target="#CreateUser"
          />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Date Created</th>
                <th scope="col" />
                <th scope="col" />
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
        <ModalCreateUser />
      </div>
    )
  }
}

Users.propTypes = usersPropTypes

export default Users

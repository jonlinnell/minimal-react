import React from 'react'

import Spinner from '../misc/Spinner'
import Users from '../containers/Users'

import ModalConfirmDeleteUser from '../containers/ModalConfirmDeleteUser'

const Settings = (props) => {
  const { fetching } = props

  return (
    <div className='card-body'>
      <h3 className='mb-3'>Settings</h3>
      <Spinner enabled={fetching} />
      <Users />

      <ModalConfirmDeleteUser />
    </div>
  )
}

export default Settings

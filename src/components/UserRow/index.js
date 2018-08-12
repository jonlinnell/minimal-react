import { connect } from 'react-redux'

import { setModifyUser, clearModifyUser, setDeletingUser } from '../../store/actions'

import UserRow from './component'

const mapDispatchToProps = dispatch => ({
  onSetDeleteUser(username) {
    dispatch(setDeletingUser(username))
  },

  onSetModifyUser(id) {
    dispatch(clearModifyUser())
    dispatch(setModifyUser(id))
  },
})

export default connect(null, mapDispatchToProps)(UserRow)

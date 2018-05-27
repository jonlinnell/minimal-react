import { connect } from 'react-redux'

import { setDeletingUser } from '../../store/actions'

import UserRow from './component'

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => ({
  onSelectDeleteUser(username) {
    dispatch(setDeletingUser(username))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRow)

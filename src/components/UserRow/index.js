import { connect } from 'react-redux'

import { setModifyUser, clearModifyUser } from '../../store/actions'

import UserRow from './component'

const mapDispatchToProps = dispatch => ({
  onSetModifyUser(id) {
    dispatch(clearModifyUser())
    dispatch(setModifyUser(id))
  },
})

export default connect(null, mapDispatchToProps)(UserRow)

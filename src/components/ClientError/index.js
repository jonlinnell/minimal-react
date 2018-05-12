import { connect } from 'react-redux'

import ClientError from './component'

import { clearError } from '../../store/actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  onClearError(index) {
    dispatch(clearError(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientError)

import { connect } from 'react-redux'

import { remoteAddURL, clearActiveUpdate } from '../../store/actions'

import InlineLinkForm from '../ui/InlineLinkForm'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  callback(url) {
    dispatch(clearActiveUpdate())
    dispatch(remoteAddURL(url))
  },

  onCancel() {
    dispatch(clearActiveUpdate())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InlineLinkForm)

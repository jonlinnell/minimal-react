import { connect } from 'react-redux'

import { remoteAddURL, clearAddingURL } from '../../store/actions'

import InlineLinkForm from '../ui/InlineLinkForm'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  callback(url) {
    dispatch(clearAddingURL())
    dispatch(remoteAddURL(url))
  },

  onCancel() {
    dispatch(clearAddingURL())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InlineLinkForm)

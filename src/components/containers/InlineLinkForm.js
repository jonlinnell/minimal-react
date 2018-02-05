import { connect } from 'react-redux'

import { remoteModifyURL, clearModifyURL } from '../../store/actions'

import InlineLinkForm from '../ui/InlineLinkForm'

const mapStateToProps = state => ({
  initialValues: state.data.urls.urls.filter(i => i.id === state.modifying)[0]
})

const mapDispatchToProps = dispatch => ({
  callback(url) {
    dispatch(remoteModifyURL(url))
  },

  onCancel() {
    dispatch(clearModifyURL())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InlineLinkForm)

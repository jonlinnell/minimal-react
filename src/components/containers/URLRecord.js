import { connect } from 'react-redux'

import {
  loadClicks,
  setModifyURL,
  clearModifyURL,
  remoteModifyURL,
  remoteDeleteURL
} from '../../store/actions'

import URLRecord from '../ui/URLRecord'

const mapStateToProps = state => ({
  activeUpdate: state.activeUpdate
})

const mapDispatchToProps = dispatch => ({
  loadClicks(id) {
    dispatch(loadClicks(id))
  },

  onSetModifyURL(id) {
    dispatch(setModifyURL(id))
  },

  onClearModifyURL() {
    dispatch(clearModifyURL())
  },

  onRemoteModifyURL(url) {
    dispatch(remoteModifyURL(url))
  },

  onDeleteURL(id) {
    dispatch(remoteDeleteURL(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(URLRecord)

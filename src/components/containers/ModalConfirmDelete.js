import { connect } from 'react-redux'

import { remoteDeleteURL } from '../../store/actions'

import ModalConfirmDelete from '../ui/ModalConfirmDelete'

const mapStateToProps = state => ({
  url: state.data.urls.urls.filter(url => url.id === state.activeUpdate.remove.id)[0]
})

const mapDispatchToProps = dispatch => ({
  onDeleteURL(id) {
    dispatch(remoteDeleteURL(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmDelete)

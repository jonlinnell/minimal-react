import { connect } from 'react-redux'

import { loadURLs, setAddingURL } from '../../store/actions'

import Links from '../ui/Links'

const mapStateToProps = state => ({
  data: state.data.urls,
  activeUpdate: state.activeUpdate
})

const mapDispatchToProps = dispatch => ({
  loadURLs() {
    dispatch(loadURLs())
  },
  onSetAddingURL() {
    dispatch(setAddingURL())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Links)

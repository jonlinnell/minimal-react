import { connect } from 'react-redux'

import {
  loadURLs,
  loadClicks,
  setAddingURL
} from '../../store/actions'

import Links from '../ui/Links'

const mapStateToProps = state => ({
  data: state.data.urls,
  activeUpdate: state.activeUpdate,
  fetching: state.fetching
})

const mapDispatchToProps = dispatch => ({
  loadURLs() {
    dispatch(loadURLs())
  },
  loadClicks() {
    dispatch(loadClicks())
  },
  onSetAddingURL() {
    dispatch(setAddingURL())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Links)

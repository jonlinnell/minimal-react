import { connect } from 'react-redux'

import {
  loadURLs,
  loadClicks,
  setAddingURL,
  clearAddingURL,
  setURLFilter,
  clearURLFilter
} from '../../store/actions'

import Links from '../ui/Links'

const mapStateToProps = state => ({
  allURLs: state.data.urls.all,
  filter: state.data.urls.filter,
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
    dispatch(clearURLFilter())
    dispatch(setAddingURL())
  },
  handleSetFilter(filter) {
    dispatch(clearAddingURL())
    filter === ''
      ? dispatch(clearURLFilter())
      : dispatch(setURLFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Links)

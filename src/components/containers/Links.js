import { connect } from 'react-redux'

import {
  loadURLs,
  loadClicks,
  setAddingURL,
  setFilter,
  clearFilter
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
    dispatch(setAddingURL())
  },
  handleSetFilter(filter) {
    dispatch(setFilter(filter))
  },
  handleClearFilter() {
    dispatch(clearFilter())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Links)

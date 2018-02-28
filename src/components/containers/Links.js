import { connect } from 'react-redux'

import {
  loadURLs,
  setAddingURL,
  loadClickCounts
} from '../../store/actions'

import Links from '../ui/Links'

const mapStateToProps = state => ({
  data: state.data.urls,
  activeUpdate: state.activeUpdate,
  fetching: state.fetching,
  clicks: state.clicks
})

const mapDispatchToProps = dispatch => ({
  loadURLs() {
    dispatch(loadURLs())
  },
  loadClickCounts() {
    dispatch(loadClickCounts())
  },
  onSetAddingURL() {
    dispatch(setAddingURL())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Links)

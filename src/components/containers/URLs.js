import { connect } from 'react-redux'

import { loadURLs } from '../../store/actions'

import URLs from '../ui/URLs'

const mapStateToProps = state => ({
  data: state.data.urls
})

const mapDispatchToProps = dispatch => ({
  loadURLs() {
    dispatch(loadURLs())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(URLs)

import { connect } from 'react-redux'

import { loadURLs } from '../../store/actions'

import Links from '../ui/Links'

const mapStateToProps = state => ({
  data: state.data.urls
})

const mapDispatchToProps = dispatch => ({
  loadURLs() {
    dispatch(loadURLs())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Links)

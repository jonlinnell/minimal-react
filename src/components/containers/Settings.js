import { connect } from 'react-redux'

import Settings from '../ui/Settings'

const mapStateToProps = state => ({
  fetching: state.fetching
})

export default connect(mapStateToProps)(Settings)

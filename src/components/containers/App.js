import { connect } from 'react-redux'

import App from '../ui/App'

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps)(App)

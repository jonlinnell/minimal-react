import { connect } from 'react-redux'

import App from '../ui/App'

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
})

export default connect(mapStateToProps)(App)

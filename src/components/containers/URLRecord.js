import { connect } from 'react-redux'

import { loadClicks } from '../../store/actions'

import URLRecord from '../ui/URLRecord'

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  loadClicks(id) {
    dispatch(loadClicks(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(URLRecord)

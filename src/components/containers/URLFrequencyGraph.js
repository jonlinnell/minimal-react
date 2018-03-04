import { connect } from 'react-redux'
import URLFrequencyGraph from '../ui/URLFrequencyGraph'

const mapStateToProps = (state, ownProps) => ({
  clicks: state.data.clicks.filter(i => i.URLId === ownProps.URLId)
})

export default connect(mapStateToProps)(URLFrequencyGraph)

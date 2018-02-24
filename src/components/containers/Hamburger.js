import { connect } from 'react-redux'

import { toggleHamburger } from '../../store/actions'

import Hamburger from '../ui/Hamburger'

const mapStateToProps = state => ({
  expanded: state.hamburger
})

const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch(toggleHamburger())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)

import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Appbar from '@material-ui/core/Appbar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/blue'
import { withStyles } from '@material-ui/core/styles'

import { navbarPropTypes, navbarDefaultProps } from '../../lib/propsValidation'

const styles = theme => ({
  flex: {
    flex: 1,
  },
  navItem: {
    color: theme.palette.common.white,
  },
  navItemActive: {
    color: theme.palette.primary.contrastText,
  },
  navbar: {
    marginBottom: theme.spacing.unit * 4,
    backgroundColor: blue[900],
  },
  buttonActive: {
    marginLeft: -12,
    marginRight: 20,
  },
})

const Navbar = (props) => {
  const { classes } = props

  const navbarItemsAuthenticated = [
    <NavLink to="/links" key="links" className={classes.navItem} activeClassName={classes.navItemActive}>
      <Button color="inherit">
        Links
      </Button>
    </NavLink>,
    <NavLink to="/statistics" key="statistics" className={classes.navItem} activeClassName={classes.navItemActive}>
      <Button color="inherit">
          Statistics
      </Button>
    </NavLink>,
    <NavLink to="/settings" key="settings" className={classes.navItem} activeClassName={classes.navItemActive}>
      <Button color="inherit">
        Settings
      </Button>
    </NavLink>,
    <a href="#logout" key="onLogout" onClick={() => props.onLogout()} className={classes.navItem}>
      <Button color="inherit">
        Logout ({props.auth.user})
      </Button>
    </a>,
  ]

  const navbarItemsUnauthenticated = [
    <Link href="/login" to="/login" key="login" className={classes.navItem}>
      <Button color="inherit">
        Login
      </Button>
    </Link>,
  ]

  return (
    <Appbar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Ricochet
        </Typography>
        {
          props.auth.isAuthenticated
            ? navbarItemsAuthenticated
            : navbarItemsUnauthenticated
        }
      </Toolbar>
    </Appbar>
  )
}

Navbar.propTypes = navbarPropTypes
Navbar.defaultProps = navbarDefaultProps

export default withStyles(styles)(Navbar)


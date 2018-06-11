import React from 'react'
import { Route, Router } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/fontawesome-free-solid'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import PrivateRoute from '../PrivateRoute'

import ClientError from '../ClientError'
import LinksView from '../LinksView'
import Login from '../Login'
import Navbar from '../Navbar'
import SettingsView from '../SettingsView'

import history from '../../history'

import { mainViewPropTypes, mainViewDefaultValues } from '../../lib/propsValidation'

const DefaultHome = () => (
  <div>
    <h1>Login</h1>
    <p>In order to view and manage links, statistics, users, and settings, you must log in.</p>
    <LinkContainer to="/login">
      <button>
        <FontAwesomeIcon icon={faSignInAlt} />
        Login
      </button>
    </LinkContainer>
  </div>
)

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
})

const MainView = (props) => {
  const { auth, errors, classes } = props

  return (
    <Router history={history}>
      <div className={classes.root}>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="center"
        >
          <Navbar />
          <div id="errors">
            {
              // botching a fix here. Will sort out error IDs in future.
              errors.map((error, i) => <ClientError key={`${error.substr(12).toString('hex')}`} index={i} error={error} />)
            }
          </div>

          <Grid item xs={12} lg={4}>
            <main>
              <Paper className={classes.paper}>
                <Route exact path="/" component={auth.isAuthenticated ? null : DefaultHome} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/links" component={LinksView} />
                <PrivateRoute path="/settings" component={SettingsView} />
              </Paper>
            </main>
          </Grid>
        </Grid>
      </div>
    </Router>
  )
}

MainView.propTypes = mainViewPropTypes
MainView.defaultValues = mainViewDefaultValues

export default withStyles(styles)(MainView)

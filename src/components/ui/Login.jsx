import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
  const { pristine, submitting, handleSubmit } = props
  return (
    <div className='col-xs-12 col-sm-4 offset-sm-4 card card-body bg-light px-4 mt-5'>
      <h1>Login</h1>
      <p className='text-secondary'>You need to log in to have access to this service.</p>
      <form onSubmit={handleSubmit} className='form-horizontal'>
        <div className='form-group'>
          <Field className='form-control' component='input' type='text' name='username'></Field>
        </div>
        <div className='form-group'>
          <Field className='form-control' component='input' type='password' name='password'></Field>
        </div>
        <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Login</button>
        {props.auth.error
          ? <p className='alert alert-danger mb-0 mt-3 p-2' role='alert'>{props.auth.error}</p>
          : null}
      </form>
    </div>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

class Login extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(credentials) {
    this.props.onLogin(credentials)
  }

  render() {
    return (
      this.props.auth.isAuthenticated
        ? <Redirect to='/' />
        : <LoginForm onSubmit={this.handleSubmit} auth={this.props.auth} />
    )
  }
}

export default Login

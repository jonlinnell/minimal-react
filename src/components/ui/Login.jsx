import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props =>
  <div className='col-sm-6 offset-md-3 my-3 card card-body bg-light'>
    <form onSubmit={props.handleSubmit} className='form-horizontal px-3'>
      <div className='form-group row'>
        <label htmlFor='username' className='col-sm-3 mr-4'>Username</label>
        <Field className='form-control col-sm-9' component='input' type='text' name='username'></Field>
      </div>
      <div className='form-group row'>
        <label htmlFor='password' className='col-sm-3 mr-4'>Password</label>
        <Field className='form-control col-sm-9' component='input' type='password' name='password'></Field>
      </div>
      <button type="submit" className="btn btn-primary pull-right">Login</button>
    </form>
  </div>

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

class Login extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(credentials) {
    const { history } = this.props
    this.props.onLogin(credentials)

    history.location.state
      ? history.push(history.location.state.from.pathname)
      : history.push('/')
  }

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit} />
    )
  }
}

export default Login

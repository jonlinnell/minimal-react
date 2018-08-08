import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import {
  createUserFormPropTypes,
  createUserFormDefaultProps,
  modalCreateUserDefaultProps,
  modalCreateUserPropTypes,
} from '../../lib/propsValidation'

let CreateUserForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    onCancel,
  } = props

  return (
    <form>
      <Field className="form-control" component="input" type="hidden" name="id" />
      <div className="modal-body">
        <Field
          className="form-control"
          component="input"
          name="username"
          placeholder="Username..."
        />
        <Field
          className="form-control"
          component="input"
          type="password"
          name="password"
          placeholder="Password..."
        />
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}
          onClick={handleSubmit}
          data-dismiss="modal"
        >
          Create
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={onCancel}
          disabled={submitting}
          data-dismiss="modal"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

CreateUserForm = reduxForm({
  form: 'createUser',
})(CreateUserForm)

class ModalCreateUser extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  onCancel() {
    this.props.onCancel()
  }

  handleSubmit(newUser) {
    this.props.onCreateUser(newUser)
  }

  render() {
    return (
      <div className="modal fade" id="CreateUser" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create a new user</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>

            <CreateUserForm
              initialValues={this.props.initialValues}
              onSubmit={this.handleSubmit}
              onCancel={this.onCancel}
            />
          </div>
        </div>
      </div>
    )
  }
}

CreateUserForm.propTypes = createUserFormPropTypes
CreateUserForm.modalUpdateUserPasswordDefaultProps = createUserFormDefaultProps
ModalCreateUser.propTypes = modalCreateUserPropTypes
ModalCreateUser.defaultProps = modalCreateUserDefaultProps

export default ModalCreateUser

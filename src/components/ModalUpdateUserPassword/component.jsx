import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import {
  updateFormPropTypes,
  updateFormDefaultProps,
  modalUpdateUserPasswordPropTypes,
  modalUpdateUserPasswordDefaultProps,
} from '../../lib/propsValidation'

let UpdateForm = (props) => {
  const {
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
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}
        >
          Change
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

UpdateForm = reduxForm({
  form: 'passwordUpdate',
})(UpdateForm)

class ModalUpdateUserPassword extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  onCancel() {
    this.props.onCancel()
  }

  handleSubmit(user) {
    this.props.onModifyUser(user)
  }

  render() {
    return (
      <div className="modal fade" id="updateUserPassword" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Password</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>

            <UpdateForm
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

UpdateForm.propTypes = updateFormPropTypes
UpdateForm.modalUpdateUserPasswordDefaultProps = updateFormDefaultProps
ModalUpdateUserPassword.propTypes = modalUpdateUserPasswordPropTypes
ModalUpdateUserPassword.defaultProps = modalUpdateUserPasswordDefaultProps

export default ModalUpdateUserPassword

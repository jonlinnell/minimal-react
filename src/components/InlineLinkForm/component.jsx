import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import {
  inlineLinkFormPropTypes,
  inlineLinkFormDefaultValues,
  linkFormPropTypes,
} from '../../lib/propsValidation'

let LinkForm = (props) => {
  const {
    handleSubmit,
    onCancel,
    pristine,
    submitting,
  } = props

  return (
    <form className="list-group-item form-inline" onSubmit={handleSubmit}>
      <div className="row">
        <Field className="form-control" component="input" type="hidden" name="id" />
        <div className="form-row w-100">
          <Field
            className="form-control col-sm-4 p-1 text-title"
            component="input"
            type="text"
            name="title"
            placeholder="Link name"
          />
          <Field
            className="form-control col-sm-8 p-1"
            component="input"
            type="text"
            name="url"
            placeholder="URL"
          />
        </div>
      </div>
      <div className="m-0 d-flex mt-2 justify-content-end">
        <button
          type="submit"
          className="btn btn-sm btn-primary"
          disabled={pristine || submitting}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-sm btn-light"
          onClick={onCancel}
          disabled={submitting}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

LinkForm = reduxForm({
  form: 'link',
})(LinkForm)

class InlineLinkForm extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  onCancel() {
    this.props.onCancel()
  }

  handleSubmit(url) {
    this.props.callback(url)
  }

  render() {
    return (
      <LinkForm
        initialValues={this.props.initialValues}
        onSubmit={this.handleSubmit}
        onCancel={this.onCancel}
      />
    )
  }
}

InlineLinkForm.defaultProps = inlineLinkFormDefaultValues
InlineLinkForm.propTypes = inlineLinkFormPropTypes
LinkForm.propTypes = linkFormPropTypes

export default InlineLinkForm

import propTypes from 'prop-types'

const shapes = {
  url: {
    clicks: propTypes.number,
    createdAt: propTypes.string,
    deleted: propTypes.bool,
    id: propTypes.number,
    title: propTypes.string,
    updatedAt: propTypes.string,
    url: propTypes.string,
  },
}

export const clientErrorPropTypes = {
  error: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  onClearError: propTypes.func.isRequired,
}

export const hamburgerPropTypes = {
  expanded: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}
export const linkFormPropTypes = {
  handleSubmit: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
  pristine: propTypes.bool.isRequired,
  submitting: propTypes.bool.isRequired,
}

export const linkViewPropTypes = {
  activeUpdate: propTypes.shape({
    add: propTypes.number,
    modify: propTypes.number,
    delete: propTypes.number,
  }),
  allURLs: propTypes.arrayOf(propTypes.shape(shapes.url)).isRequired,
  fetching: propTypes.bool.isRequired,
  filter: propTypes.string,
  handleSetFilter: propTypes.func.isRequired,
  onSetAddingURL: propTypes.func.isRequired,
}

export const inlineLinkFormPropTypes = {
  onCancel: propTypes.func.isRequired,
  callback: propTypes.func.isRequired,
  initialValues: propTypes.shape(shapes.url),
}

export const inlineLinkFormDefaultValues = {
  initialValues: {
    clicks: null,
    createdAt: null,
    deleted: null,
    id: null,
    title: null,
    updatedAt: null,
    url: null,
  },
}

export const linksViewDefaultProps = {
  activeUpdate: {
    add: null,
    modify: null,
    delete: null,
  },
  filter: null,
}

export default null

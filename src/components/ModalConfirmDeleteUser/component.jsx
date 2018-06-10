import React, { Component } from 'react'

class ModalConfirmDelete extends Component {
  render() {
    const { username } = this.props.user || { username: null }

    return (
      <div className="modal fade" id="confirmDeleteUser" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm delete</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete {username}? Their URLs will not be deleted.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.props.onDeleteUser(username)}
                data-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalConfirmDelete

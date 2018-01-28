import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className='col-md-6 offset-md-3 mt-2 card card-body bg-light'>
        <h1>Hello world!</h1>
        <div id='errors'>
          {this.props.errors.map((error, i) => <p key={i} className='alert alert-danger'>{error}</p>)}
        </div>
      </div>
    )
  }
}

export default App

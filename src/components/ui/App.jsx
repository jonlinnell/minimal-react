import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <div id='errors'>
          {this.props.errors}
        </div>
      </div>
    )
  }
}

export default App

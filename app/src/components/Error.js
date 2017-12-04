import React from 'react'
import {formCloseError} from '../actions'

class Error extends React.Component {
  closeError() {
    this.props.dispatch(formCloseError())
  }

  render() {
    let {response} = this.props,
      style = {
        top: (window.innerHeight / 2) - 40
      }

    return (
      <div id="errorAlert">
        <div style={style}>
          <button onClick={this.closeError.bind(this)}>X</button>
          <h3>Error</h3>
          <p>{response.status} {response.statusText}</p>
        </div>
      </div>
    )
  }
}

export default Error
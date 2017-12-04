import React from 'react'
import {removeUpdateNotification} from '../actions'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class UpdateNotify extends React.Component {
  handleAccept() {
    this.props.dispatch(removeUpdateNotification())

    window.location.reload()
  }

  handleReject() {
    this.props.dispatch(removeUpdateNotification())
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="notifyUpdate"
        transitionAppear={true}
        transitionAppearTimeout={750}
        transitionEnter={false}
        transitionLeave={false}
      >

        <div id="notifyUpdate">
          <img src={require("../icons/icon-192x192.png")}/>
          <button
            className="close"
            onClick={this.handleReject.bind(this)}
          >
            X
          </button>
          <h4>The Light of Other Days</h4>
          <p>www.jimmaginn.com</p>
          <button onClick={this.handleAccept.bind(this)}>Update and reload</button>
        </div>
      </CSSTransitionGroup>
    )
  }
}

export default UpdateNotify
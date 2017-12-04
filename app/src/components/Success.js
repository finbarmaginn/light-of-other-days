import React from 'react'
import {formHideSuccess} from '../actions'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class Success extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      return this.props.dispatch(formHideSuccess())
    }, 3000)
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="successHide"
        transitionAppear={true}
        transitionAppearTimeout={3000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div id="success">
        <span className="checkmark">
            <div className="checkmark_circle"/>
            <div className="checkmark_stem"/>
            <div className="checkmark_kick"/>
        </span>
        </div>
      </CSSTransitionGroup>
    )
  }
}

export default Success
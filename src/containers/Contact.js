import React from 'react'
import {connect} from 'react-redux'
import Loader from "../components/Loader"
import Error from "../components/Error"
import Success from "../components/Success"
import {
  formNameChange,
  formEmailChange,
  formMessageChange,
  formSubmit,
  formClear
} from '../actions'

@connect((store) => {
  return {
    name: store.formData.name,
    email: store.formData.email,
    message: store.formData.message,
    pending: store.formStatus.pending,
    sent: store.formStatus.sent,
    error: store.formStatus.error,
    response: store.formStatus.response
  }
})

class Contact extends React.Component {
  handleNameChange(e) {
    let name = e.target.value
    this.props.dispatch(formNameChange(name))
  }

  handleEmailChange(e) {
    let email = e.target.value
    this.props.dispatch(formEmailChange(email))
  }

  handleMessageChange(e) {
    let message = e.target.value
    this.props.dispatch(formMessageChange(message))
  }

  handleFormSubmit(e) {
    e.preventDefault()
    let {name, email, message} = this.props,
      data = {
        name: name,
        email: email,
        message: message
      }

    this.props.dispatch(formSubmit(data))
      .then((returned) => {
        console.log(returned)
        return this.props.dispatch(formClear())
      })
      .catch((error) => {
        console.log(error)
      })
  }

  loader() {
    if (this.props.pending) {
      return <Loader/>
    }
  }

  error() {
    let {error, response, dispatch} = this.props
    if (error) {
      return (
        <Error response={response} dispatch={dispatch}/>
      )
    }
  }

  success() {
    let {sent, dispatch} = this.props
    if (sent) {
      return (
        <Success
          dispatch={dispatch}
        />
      )
    }
  }

  render() {
    let {name, email, message} = this.props
    return (
      <section className="wrap">
        <h2>Contact</h2>
        <article>
          <form onSubmit={this.handleFormSubmit.bind(this)} method="post">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              onChange={this.handleNameChange.bind(this)}
              value={name}
              placeholder="Name"
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              onChange={this.handleEmailChange.bind(this)}
              value={email}
              placeholder="Email"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              onChange={this.handleMessageChange.bind(this)}
              value={message}
              placeholder="Message"
            />
            <input type="submit" value="Send"/>
          </form>
        </article>
        {this.loader()}
        {this.error()}
        {this.success()}
      </section>
    )
  }
}

export default Contact

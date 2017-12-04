import React from 'react'
import {
  shopChangeName,
  shopChangeEmail,
  shopChangePostcode,
  shopChangeHouseNo
} from '../actions'

class ShopPersonalInfo extends React.Component {
  handleName(e) {
    this.props.dispatch(shopChangeName(e.target.value))
  }

  handleEmail(e) {
    this.props.dispatch(shopChangeEmail(e.target.value))
  }

  handlePostcode(e) {
    this.props.dispatch(shopChangePostcode(e.target.value))
  }

  handleHouseNo(e) {
    this.props.dispatch(shopChangeHouseNo(e.target.value))
  }

  render() {
    let {name, email, postcode, houseNo} = this.props
    return (
      <div>
        <h3>Personal Information:</h3>
        <div className="splitter">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              onChange={this.handleName.bind(this)}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              onChange={this.handleEmail.bind(this)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="postcode">Postcode:</label>
            <input
              id="postcode"
              type="text"
              placeholder="Postcode"
              onChange={this.handlePostcode.bind(this)}
              value={postcode}
            />
          </div>
          <div>
            <label htmlFor="houseNo">House Number:</label>
            <input
              id="houseNo"
              type="text"
              placeholder="0"
              onChange={this.handleHouseNo.bind(this)}
              value={houseNo}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default ShopPersonalInfo
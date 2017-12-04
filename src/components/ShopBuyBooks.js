import React from 'react'
import {
  shopBuyBook,
  shopBookQuant
} from '../actions'

class ShopBuyBooks extends React.Component{
  toggleBuyBook(e) {
    this.props.dispatch(shopBuyBook(e.target.checked))
  }

  handleBookQuant(e) {
    this.props.dispatch(shopBookQuant(e.target.value))
  }
  render(){
    let {buyBook, bookQuant} = this.props,
      booksStyle = {},
      labelStyle = {}

    if (!buyBook) {
      booksStyle = {
        opacity: 0.5
      }

      labelStyle = {
        cursor: "default"
      }
    }

    return (
      <div>
        <h3>Books:</h3>
        <label htmlFor="buyBook">Buy a Book?</label>
        <input
          type="checkbox"
          id="buyBook"
          onClick={this.toggleBuyBook.bind(this)}
          checked={buyBook}
        />
        <br />
        <div style={booksStyle}>
          <label htmlFor="bookQuant" style={labelStyle}>Quantity:</label>
          <br />
          <select
            id="bookQuant"
            value={bookQuant}
            disabled={!buyBook}
            onChange={this.handleBookQuant.bind(this)}
          >
            <option disabled={buyBook}>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      </div>
    )
  }
}

export default ShopBuyBooks
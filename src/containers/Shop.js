import React from 'react'
import {connect} from 'react-redux'
import PricingTable from '../components/PricingTable'
import ShopInfo from '../components/ShopInfo'
import ShopPersonalInfo from "../components/ShopPersonalInfo"
import ShopBuyBooks from "../components/ShopBuyBooks"
import ShopBuyPrints from "../components/ShopBuyPrints"
import {
  shopChangeMessage,
  shopSubmit
} from '../actions'

@connect((store) => {
  return {
    name: store.shopData.name,
    email: store.shopData.email,
    postcode: store.shopData.postcode,
    houseNo: store.shopData.houseNo,
    message: store.shopData.message,
    buyBook: store.shopData.buyBook,
    buyPrints: store.shopData.buyPrints,
    prints: store.shopData.prints,
    bookQuant: store.shopData.bookQuant,
    printSize: store.shopData.printSize,
    pending: store.shopStatus.pending,
    sent: store.shopStatus.sent,
    error: store.shopStatus.error,
    response: store.shopStatus.response
  }
})

class Shop extends React.Component {

  handleMessageChange(e) {
    this.props.dispatch(shopChangeMessage(e.target.value))
  }

  handleSubmit(e) {
    let {name, email, message, buyBooks, bookQuant, buyPrints, listPrints, printSize} = this.props,
      data = {
        name: name,
        email: email,
        message: message,
        buyBooks: buyBooks,
        bookQuant: bookQuant,
        buyPrints: buyPrints,
        pintSize: printSize,
        listPrints: listPrints
      }
    e.preventDefault()
    this.props.dispatch(shopSubmit(data))
  }

  render() {
    let {
      name,
      email,
      postcode,
      houseNo,
      buyBook,
      bookQuant,
      buyPrints,
      prints,
      printSize,
      message,
      dispatch
    } = this.props


    return (
      <section className="wrap">
        <h2>Shop</h2>
        <article>
          <form
            onSubmit={this.handleSubmit.bind(this)}
          >
            <PricingTable/>
            <ShopInfo/>
            <ShopPersonalInfo
              dispatch={dispatch}
              name={name}
              email={email}
              postcode={postcode}
              houseNo={houseNo}
            />
            <ShopBuyBooks
              dispatch={dispatch}
              buyBook={buyBook}
              bookQuant={bookQuant}
            />
            <ShopBuyPrints
              dispatch={dispatch}
              prints={prints}
              buyPrints={buyPrints}
              printSize={printSize}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              onChange={this.handleMessageChange.bind(this)}
              value={message}
            />
            <input type="submit" value="Send"/>
          </form>
        </article>
      </section>
    )
  }
}

export default Shop
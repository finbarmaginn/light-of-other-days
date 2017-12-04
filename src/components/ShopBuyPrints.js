import React from 'react'
import ReactUIDropdown from '../components/ReactUIDropdown'
import images from '../imgs/finalImages'
import {
  shopBuyPrints,
  shopListPrints,
  shopPrintSize
} from '../actions'


class ShopBuyPrints extends React.Component {
  handleDropdownChange = (selectedItems) => {
    // let selectedImages = []
    // for (let i in selectedItems) {
    //   selectedImages.push(selectedItems[i])
    // }
    //this.props.dispatch(shopListPrints(selectedImages))
  }


  handlePrintSize(e) {
    this.props.dispatch(shopPrintSize(e.target.value))
  }

  toggleBuyPrints(e) {
    this.props.dispatch(shopBuyPrints(e.target.checked))
  }

  render() {
    let {buyPrints, prints, printSize} = this.props,
      printsStyle = {},
      labelStyle = {},
      data = []

    for (let i = 0; i < images.length; i++) {
      if (typeof images[i].cap() !== "function") {
        data.push(
          {
            id: i + 1,
            title: images[i].cap(),
            image: images[i].src.medium
          }
        )
      }
    }

    if (!buyPrints) {
      printsStyle = {
        opacity: 0.5
      }
      labelStyle = {
        cursor: "default"
      }
    }

    return (
      <div>
        <h3>Prints:</h3>
        <label htmlFor="buyPrint">Buy Prints?</label>
        <input
          type="checkbox"
          id="buyPrint"
          onClick={this.toggleBuyPrints.bind(this)}
          checked={buyPrints}
        />
        <br />
        <div id="printSizes" style={printsStyle}>
          <ReactUIDropdown
            label="Photograph by Name:"
            initialItems={data}
            onChange={this.handleDropdownChange.bind(this)}
            placeholder="-- Start Typing to Search --"
            buyPrints={buyPrints}
            prints={prints}
            labelStyle={labelStyle}
          />
          <input
            type="hidden"
            id="selectedImages"
            name="selectedImages"
            disabled={!buyPrints}
            value={prints.join("\n")}
          />
          <label htmlFor="printSize" style={labelStyle}>Print Size(s):</label>
          <br />
          <select
            id="printSize"
            value={printSize}
            disabled={!buyPrints}
            onChange={this.handlePrintSize.bind(this)}
          >
            <option disabled={buyPrints}>-- Please Select --</option>
            <option>Small - £(price)</option>
            <option>Medium - £(price)</option>
            <option>Large - £(price)</option>
          </select>
          <p style={{
            fontSize: "95%",
            color: "#b2100b"
          }}>
            Please specify in the message box below if you would like a variety of sizes, otherwise just select
            the size you would like your prints to be above.
          </p>
        </div>
      </div>

    )
  }
}

export default ShopBuyPrints
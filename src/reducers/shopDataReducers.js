const shopData = function reducer(state = {
  name: '',
  email: '',
  postcode: '',
  houseNo: '',
  message: '',
  buyBook: false,
  bookQuant: 0,
  buyPrints: false,
  prints: [],
  printSize: ''
}, action) {
  switch (action.type) {
    case "SHOP_NAME_CHANGE": {
      return {
        ...state,
        name: action.payload.name
      }
    }
    case "SHOP_EMAIL_CHANGE": {
      return {
        ...state,
        email: action.payload.email
      }
    }

    case "SHOP_POSTCODE_CHANGE": {
      return {
        ...state,
        postcode: action.payload.postcode
      }
    }
    case "SHOP_HOUSE_NUMBER_CHANGE": {
      return {
        ...state,
        houseNo: action.payload.houseNo
      }
    }

    case "SHOP_BUY_BOOK": {
      return {
        ...state,
        buyBook: action.payload.buyBook
      }
    }
    case "SHOP_BOOK_QUANT": {
      return {
        ...state,
        bookQuant: action.payload.bookQuant
      }
    }
    case "SHOP_BUY_PRINTS": {
      return {
        ...state,
        buyPrints: action.payload.buyPrints
      }
    }
    case "SHOP_LIST_PRINTS": {
      return {
        ...state,
        prints: action.payload.prints
      }
    }
    case "SHOP_PRINT_SIZES": {
      return {
        ...state,
        printSize: action.payload.printSize
      }
    }
    case "SHOP_MESSAGE_CHANGE": {
      return {
        ...state,
        message: action.payload.message
      }
    }
    case "SHOP_CLEAR": {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message,
        buyBook: action.payload.buyBook,
        bookQuant: action.payload.bookQuant,
        buyPrints: action.payload.buyPrints,
        prints: action.payload.prints,
        printSize: action.payload.printSize
      }
    }
  }
  return state;
}

export default shopData
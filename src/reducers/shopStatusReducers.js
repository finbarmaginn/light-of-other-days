const shopStatus = function reducer(state = {
  error: false,
  sent: false,
  pending: false,
  response: {}
}, action) {
  switch (action.type) {
    case "SHOP_SUBMIT_PENDING": {
      return {
        ...state,
        pending: true
      }
    }
    case "SHOP_SUBMIT_FULFILLED": {
      return {
        ...state,
        sent: true,
        pending: false,
        error: false
      }
    }
    case "SHOP_SUBMIT_REJECTED": {
      return {
        ...state,
        error: true,
        sent: false,
        pending: false,
        response: action.payload.response
      }
    }
    case "SHOP_CLOSE_ERROR": {
      return {
        ...state,
        error: action.payload.error
      }
    }
    case "SHOP_HIDE_SUCCESS": {
      return {
        ...state,
        sent: action.payload.sent
      }
    }
  }
  return state
}

export default shopStatus
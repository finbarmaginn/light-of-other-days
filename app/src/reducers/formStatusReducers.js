const formStatus = function reducer(state = {
  pending: false,
  sent: false,
  error: false,
  response: {}
}, action) {
  switch (action.type) {
    case "FORM_SUBMIT_PENDING": {
      return {
        ...state,
        pending: true
      }
    }
    case "FORM_SUBMIT_FULFILLED": {
      return {
        ...state,
        sent: true,
        pending: false,
        error: false
      }
    }
    case "FORM_SUBMIT_REJECTED": {
      return {
        ...state,
        error: true,
        sent: false,
        pending: false,
        response: action.payload.response
      }
    }
    case "FORM_CLOSE_ERROR": {
      return {
        ...state,
        error: action.payload.error
      }
    }
    case "FORM_HIDE_SUCCESS": {
      return {
        ...state,
        sent: action.payload.sent
      }
    }
  }
  return state
}

export default formStatus
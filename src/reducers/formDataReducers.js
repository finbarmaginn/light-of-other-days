const formData = function reducer(state = {
  name: '',
  email: '',
  message: '',
}, action) {
  switch (action.type) {
    case "FORM_NAME_CHANGE": {
      return {
        ...state,
        name: action.payload.name
      }
    }
    case "FORM_EMAIL_CHANGE": {
      return {
        ...state,
        email: action.payload.email
      }
    }
    case "FORM_MESSAGE_CHANGE": {
      return {
        ...state,
        message: action.payload.message
      }
    }
    case "FORM_CLEAR": {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message
      }
    }
  }
  return state;
}

export default formData
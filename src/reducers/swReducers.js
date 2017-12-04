const sw = function reducer(state = {
  updateReady: false,
  online: true
}, action) {
  switch (action.type) {
    case "SW_NOTIFY_UPDATE_READY": {
      return {
        ...state,
        updateReady: action.payload.updateReady
      }
    }
    case "SW_REMOVE_UPDATE_NOTIFICATION": {
      return {
        ...state,
        updateReady: action.payload.updateReady
      }
    }
    case "SW_NOW_ONLINE": {
      return {
        ...state,
        online: action.payload.online
      }
    }
    case "SW_NOW_OFFLINE": {
      return {
        ...state,
        online: action.payload.online
      }
    }
  }
  return state;
}

export default sw

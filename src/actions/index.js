import axios from 'axios'

export function searchImages(val, act, hasResults) {
  return {
    type: "IMAGE_SEARCH",
    payload: {
      value: val,
      active: act,
      hasResults: hasResults
    }
  }
}
export function viewImage(image) {
  return {
    type: "VIEW_IMAGE",
    payload: {
      open: true,
      closed: false,
      loading: true,
      imageSrc: image.src.large,
      imageCap: image.cap(),
      imageYear: image.year,
      ratio: image.ratio,
      format: image.format
    }
  }
}

export function imageLoaded() {
  return {
    type: "IMAGE_LOADED",
    payload: {
      loading: false
    }
  }
}

export function closeImage() {
  return {
    type: "CLOSE_IMAGE",
    payload: {
      open: false,
      closed: true,
      imageSrc: "",
      imageCap: "",
      imageYear: null,
      ratio: [],
      format: ""
    }
  }
}

export function loadImages(arr) {
  return {
    type: "LOAD_IMAGES",
    payload: {
      images: arr,
      loading: true
    }
  }
}

export function imagesLoaded() {
  return {
    type: "IMAGES_LOADED",
    payload: {
      loading: false
    }
  }
}

export function viewerResize(height) {
  return {
    type: "VIEWER_RESIZE",
    payload: {
      viewerHeight: height
    }
  }
}

export function notifyUpdateReady() {
  return {
    type: "SW_NOTIFY_UPDATE_READY",
    payload: {
      updateReady: true
    }
  }
}

export function removeUpdateNotification() {
  return {
    type: "SW_REMOVE_UPDATE_NOTIFICATION",
    payload: {
      updateReady: false
    }
  }
}

export function nowOnline() {
  return {
    type: "SW_NOW_ONLINE",
    payload: {
      online: true
    }
  }
}
export function nowOffline() {
  return {
    type: "SW_NOW_OFFLINE",
    payload: {
      online: false
    }
  }
}

export function formSubmit(data) {
  return {
    type: "FORM_SUBMIT",
    payload: axios.post('/contact.php', data)
  }
}

export function formNameChange(name) {
  return {
    type: "FORM_NAME_CHANGE",
    payload: {
      name: name
    }
  }
}

export function formEmailChange(email) {
  return {
    type: "FORM_EMAIL_CHANGE",
    payload: {
      email: email
    }
  }
}

export function formMessageChange(message) {
  return {
    type: "FORM_MESSAGE_CHANGE",
    payload: {
      message: message
    }
  }
}

export function formCloseError() {
  return {
    type: "FORM_CLOSE_ERROR",
    payload: {
      error: false
    }
  }
}

export function formHideSuccess() {
  return {
    type: "FORM_HIDE_SUCCESS",
    payload: {
      sent: false
    }
  }
}

export function formClear() {
  return {
    type: "FORM_CLEAR",
    payload: {
      name: '',
      email: '',
      message: ''
    }
  }
}


export function shopChangeName(name) {
  return {
    type: "SHOP_NAME_CHANGE",
    payload: {
      name: name
    }
  }
}

export function shopChangeEmail(email) {
  return {
    type: "SHOP_EMAIL_CHANGE",
    payload: {
      email: email
    }
  }
}

export function shopChangePostcode(text) {
  return {
    type: "SHOP_POSTCODE_CHANGE",
    payload: {
      postcode: text
    }
  }
}
export function shopChangeHouseNo(text) {
  return {
    type: "SHOP_HOUSE_NUMBER_CHANGE",
    payload: {
      houseNo: text
    }
  }
}

export function shopBuyBook(status) {
  return {
    type: "SHOP_BUY_BOOK",
    payload: {
      buyBook: status
    }
  }
}

export function shopBookQuant(int) {
  return {
    type: "SHOP_BOOK_QUANT",
    payload: {
      bookQuant: int
    }
  }
}

export function shopBuyPrints(status) {
  return {
    type: "SHOP_BUY_PRINTS",
    payload: {
      buyPrints: status
    }
  }
}

export function shopListPrints(prints) {
  return {
    type: "SHOP_LIST_PRINTS",
    payload: {
      prints: prints
    }
  }
}

export function shopPrintSize(size) {
  return {
    type: "SHOP_PRINT_SIZES",
    payload: {
      printSize: size
    }
  }
}

export function shopChangeMessage(message) {
  return {
    type: "SHOP_MESSAGE_CHANGE",
    payload: {
      message: message
    }
  }
}

export function shopSubmit(data) {
  return {
    type: "SHOP_SUBMIT",
    payload: axios.post('/shop.php', data)
  }
}
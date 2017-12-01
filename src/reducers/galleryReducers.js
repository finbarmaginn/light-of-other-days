const gallery = function reducer(state = {
  imageSrc: "",
  imageCap: "",
  imageYear: null,
  ratio: [],
  format: "",
  open: false,
  closed: true,
  loading: false,
  images: [],
  perPage: 13,
  searchTerm: "",
  filterActive: false,
  hasResults: null
}, action) {
  switch (action.type) {
    case "VIEW_IMAGE":
      {
        return {
          ...state,
          imageSrc: action.payload.imageSrc,
          imageCap: action.payload.imageCap,
          imageYear: action.payload.imageYear,
          open: action.payload.open,
          loading: action.payload.loading,
          closed: action.payload.closed,
          ratio: action.payload.ratio,
          format: action.payload.format,
        }
      }
    case "IMAGE_LOADED":
      {
        return {
          ...state,
          loading: action.payload.loading
        }
      }
    case "CLOSE_IMAGE":
      {
        return {
          ...state,
          imageSrc: action.payload.imageSrc,
          imageCap: action.payload.imageCap,
          imageYear: action.payload.imageYear,
          open: action.payload.open,
          closed: action.payload.closed,
          ratio: action.payload.ratio
        }
      }
    case "LOAD_IMAGES":
      {
        return {
          ...state,
          images: action.payload.images,
          loading: action.payload.loading
        }
      }
    case "IMAGES_LOADED":
      {
        return {
          ...state,
          loading: action.payload.loading
        }
      }
    case "VIEWER_RESIZE":
      {
        return {
          ...state,
          viewerHeight: action.payload.viewerHeight
        }
      }
    case "IMAGE_SEARCH":
      {
        return {
          ...state,
          searchTerm: action.payload.value,
          filterActive: action.payload.active,
          hasResults: action.payload.hasResults
        }
      }
    default:
      return state;
  }
}

export default gallery
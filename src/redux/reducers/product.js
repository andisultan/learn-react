import { 
  PRODUCT_CREATE,
  PRODUCT_UPDATE,
  PRODUCT_ERROR,
  PRODUCT_FETCH
} from 'redux/actions/product';

const initialState = {
  loading: true,
  error: '',
  data: []
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH:
    case PRODUCT_UPDATE:
    case PRODUCT_CREATE:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload
      }
    case PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default productReducer;
import { 
  ARTICLE_FETCH,
  ARTICLE_FETCH_ERROR,
  ARTICLE_CREATE, 
  ARTICLE_DELETE, 
  ARTICLE_UPDATE, 
} from 'redux/actions/article';

const initialState = {
  loading: true,
  error: '',
  data: []
}

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_FETCH:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload
      }
    case ARTICLE_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ARTICLE_CREATE:
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload)
      }
    case ARTICLE_UPDATE:
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload)
      }
    case ARTICLE_DELETE:
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload)
      }
    default:
      return state;
  }
}

export default articleReducer;
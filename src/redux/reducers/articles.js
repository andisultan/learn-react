import { 
  ARTICLE_REQUESTED,
  ARTICLE_RECEIVED,
  ARTICLE_FAILED, 
  ARTICLE_ADD 
} from 'redux/actions/articles';

const initialState = {
  loading: true,
  error: '',
  articles: []
}

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case ARTICLE_RECEIVED:
      console.log('action.payload', action.payload);
      return {
        ...state,
        loading: false,
        articles: action.payload
      }
    case ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ARTICLE_ADD:
      return {
        ...state,
        loading: false,
        articles: state.articles.concat(action.payload)
      }
    default:
      return state;
  }
}

export default articleReducer;
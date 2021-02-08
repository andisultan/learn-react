import { ARTICLE_FETCH, ARTICLE_ADD } from '../actions/articles';

const initialState = {
  loading: true,
  articles: []
}

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_FETCH:
      return {
        ...state,
        loading: false,
        articles: [
          { title: 'Article One' },
          { title: 'Article Two' },
        ]
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
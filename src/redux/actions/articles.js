export const ARTICLE_REQUESTED = 'ARTICLE_FETCH';
export const ARTICLE_RECEIVED = 'ARTICLE_ADD';
export const ARTICLE_FAILED = 'ARTICLE_FAILED';

export const ARTICLE_ADD = 'ARTICLE_ADD';


export const articleFetch = () => {
  return function (dispatch) {
    dispatch({ type: ARTICLE_REQUESTED });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => { 
        return dispatch({ type: ARTICLE_RECEIVED, payload: json})
      })
      .catch(error => dispatch({ type: ARTICLE_FAILED, payload: error }));
  }
}

export const articleAdd = (payload) => {
  return {
    type: ARTICLE_ADD, payload
  }
}
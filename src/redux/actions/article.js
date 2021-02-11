export const ARTICLE_FETCH = 'ARTICLE_FETCH';
export const ARTICLE_FETCH_ERROR = 'ARTICLE_FETCH_ERROR';
export const ARTICLE_CREATE = 'ARTICLE_CREATE';
export const ARTICLE_UPDATE = 'ARTICLE_UPDATE';
export const ARTICLE_DELETE = 'ARTICLE_DELETE';


export const articleFetch = () => {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response => {
        dispatch({ type: ARTICLE_FETCH, payload: response})
      })
      .catch(error => {
        dispatch({ type: ARTICLE_FETCH_ERROR, payload: error })
      });
  }
}

export const articleCreate = (payload) => {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: payload.title,
        body: payload.body,
        userId: 1111,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => { 
        console.log('response', response);
        dispatch({ type: ARTICLE_CREATE, payload: response})
      })
      .catch(error => {
        console.log('response', error);
        dispatch({ type: ARTICLE_FETCH_ERROR, payload: error })
      });
  }
}
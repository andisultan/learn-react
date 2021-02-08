export const ARTICLE_FETCH = 'ARTICLE_FETCH';
export const ARTICLE_ADD = 'ARTICLE_ADD';

export const articleFetch = () => {
  return {
    type: ARTICLE_FETCH
  }
}

export const articleAdd = (payload) => {
  return {
    type: ARTICLE_ADD, payload
  }
}
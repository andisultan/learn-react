import { API_STRAPI, LOCAL_DATA } from "utils/constant";

export const PRODUCT_FETCH = 'PRODUCT_FETCH';
export const PRODUCT_CREATE = 'PRODUCT_CREATE';
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';
export const PRODUCT_ERROR = 'PRODUCT_ERROR';

const USER_DATA = localStorage.getItem(LOCAL_DATA);

export const productFetch = () => {
  return function(dispatch) {
    fetch(`${API_STRAPI}/products`)
      .then(response => response.json())
      .then(response => { 
        dispatch({ type: PRODUCT_FETCH, payload: response})
      })
      .catch(error => {
        dispatch({ type: PRODUCT_ERROR, payload: error })
      });
  }
}

export const productCreate = (data) => {
  return function(dispatch) {
    fetch(`${API_STRAPI}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${USER_DATA.jwt}`,
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => { 
        dispatch({ type: PRODUCT_CREATE, payload: response})
      })
      .catch(error => {
        dispatch({ type: PRODUCT_ERROR, payload: error })
      });
  }
}
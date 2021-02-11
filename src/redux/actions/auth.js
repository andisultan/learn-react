import { API_STRAPI, LOCAL_DATA } from "utils/constant";

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_ERROR = 'AUTH_REGISTER';

export const authLogin = (data) => {
  return function(dispatch) {
    fetch(`${API_STRAPI}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => { 
        localStorage.setItem(LOCAL_DATA, JSON.stringify(response));
        dispatch({ type: AUTH_LOGIN, payload: response})
      })
      .catch(error => {
        dispatch({ type: AUTH_ERROR, payload: error })
      });
  }
}

export const authRegister = (data) => {
  return function(dispatch) {
    fetch(`${API_STRAPI}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => { 
        dispatch({ type: AUTH_REGISTER, payload: response})
      })
      .catch(error => {
        dispatch({ type: AUTH_ERROR, payload: error })
      });
  }
}
import { 
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_ERROR
} from 'redux/actions/auth';
import { LOCAL_DATA } from "utils/constant";

const localData = localStorage.getItem(LOCAL_DATA);

const initialState = {
  loading: true,
  error: '',
  data: localData
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
    case AUTH_REGISTER:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload
      }
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;
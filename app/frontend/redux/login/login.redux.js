
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_REQ = "LOGOUT_REQ";
const initState = {
    user: {},
    loading: false,
    isAuth: false,
    error: false,
  };
  
  export const fetchLoginSuccess = (data) => {
    return {
      type: LOGIN_SUCCESS,
      payload: data,
    };
  };
  
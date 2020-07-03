import { userActionTypes } from "./constants";
const initialState = {
  loggingIn: false,
  user: undefined,
  isLoading: false,
  token: undefined,
};

const reducerAuthentication = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionTypes.LOGIN_REQUEST:
      return {
        loggedIn: false,
        isLoading: true,
      };
    case userActionTypes.LOGIN_SUCCESS:
      return {
        loggingIn: true,
        isLoading: false,
        user: payload.user,
        token: payload.token,
      };
    case userActionTypes.LOGIN_FAILURE:
      return {
        isLoading: false,
      };

    default:
      return state;
  }
};
export default reducerAuthentication;

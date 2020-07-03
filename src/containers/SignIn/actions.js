import { userActionTypes } from "./constants";

import UserService from "../../services/userServices";

export function signInUser(value = "") {
  return (dispatch) => {
    dispatch({ type: userActionTypes.LOGIN_REQUEST });
    UserService.signInUser(value)
      .then((result) => {
        localStorage.setItem("token", result.data.data.token);
        dispatch({
          type: userActionTypes.LOGIN_SUCCESS,
          payload: result.data.data,
        });
      })
      .catch((e) => {
        // dispatchError(dispatch, "GET_LIST_ERROR", e, true);
      });
  };
}

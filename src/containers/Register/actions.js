import UserServices from "../../services/userServices";

import { userActionTypes } from "./constants";
export function registerUser(body) {
  return (dispatch) => {
    dispatch({ type: userActionTypes.REGISTER_REQUEST });
    UserServices.registerUser(body)
      .then((result) => {
        dispatch({
          type: userActionTypes.REGISTER_SUCCESS,
          payloa: result.data.data.status,
        });
      })
      .catch((e) => {});
  };
}

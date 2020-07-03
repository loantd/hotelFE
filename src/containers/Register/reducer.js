import { userActionTypes } from "./constants";
const initialState = {
  isLoading: false,
  isRegister: "",
};

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionTypes.REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case userActionTypes.REGISTER_SUCCESS:
      return {
        isLoading: false,
        isRegister: payload,
      };
    case userActionTypes.REGISTER_FAILURE:
      return {
        isLoading: false,
      };

    default:
      return state;
  }
};
export default registerReducer;

import { modalActionTypes } from "./constants";

const initialState = {
  isOpen: false,
  options: {},
};

const reducerModal = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW:
      return {
        ...state,
        isOpen: true,
        options: action.payload,
      };
    case modalActionTypes.HIDE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default reducerModal;

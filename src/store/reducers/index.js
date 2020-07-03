import { combineReducers } from "redux";
import modalReducer from "../../containers/Modal/reducer";
import homeReducer from "../../containers/Home/reducer";
import registerReducer from "../../containers/Register/reducer";
import reducerAuthentication from "../../containers/SignIn/reducer";
import bookingDetailsReducer from "../../containers/BookingDetails/reducer";

const appReducer = combineReducers({
  modalReducer,
  homeReducer,
  registerReducer,
  reducerAuthentication,
  bookingDetailsReducer,
});

const rootReducer = (state, action) => {
  //   if (action.type == userActionTypes.LOGOUT) {
  //     state = undefined;
  //   }
  return appReducer(state, action);
};

export default rootReducer;

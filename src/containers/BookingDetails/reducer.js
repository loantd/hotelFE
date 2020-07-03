import { userActionTypes } from "./constants";
const initState = {
  data: [],
  listBooking: [],
  isLoading: false,
  loading: false,
  totalPage: 0,
  page: 0,
};

const bookingDetailsReducer = (state = initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case userActionTypes.BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActionTypes.BOOKING_SUCCESS:
      return {
        loading: false,
        data: payload,
      };
    case userActionTypes.BOOKING_FAILURE:
      return {
        initState,
        // error,
      };
    case userActionTypes.GET_LIST_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActionTypes.GET_LIST_BOOKING_SUCCESS:
      return {
        loading: false,
        listBooking: payload,
        totalPage: action.totalPage,
        page: action.page,
      };
    case userActionTypes.GET_LIST_BOOKING_FAILURE:
      return {
        initState,
        // error,
      };
    case "DETROY_TOPIC_DATA":
      return initState;
    default:
      return state;
  }
};

export default bookingDetailsReducer;

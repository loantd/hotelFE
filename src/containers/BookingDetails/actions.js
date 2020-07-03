import { userActionTypes } from "./constants";
import HotelService from "../../services/hotelServices";

export function bookingDetails(body) {
  return (dispatch) => {
    dispatch({ type: userActionTypes.BOOKING_REQUEST });
    HotelService.bookingHotel(body)
      .then((result) => {
        dispatch({
          type: userActionTypes.BOOKING_SUCCESS,
          payload: result.data,
        });
      })
      .catch((e) => {
        // dispatchError(dispatch, "GET_LIST_ERROR", e, true);
      });
  };
}

export function getListBooking(page = 1, limit = 10) {
  return (dispatch) => {
    dispatch({ type: userActionTypes.GET_LIST_BOOKING_REQUEST });
    HotelService.getListBooking({ page, limit })
      .then((result) => {
        dispatch({
          type: userActionTypes.GET_LIST_BOOKING_SUCCESS,
          payload: result.data.data.bookings,
          limit: result.data.data.limit,
          page: result.data.data.page,
          totalPage: result.data.data.total,
        });
      })
      .catch((e) => {
        // dispatchError(dispatch, "GET_LIST_ERROR", e, true);
      });
  };
}

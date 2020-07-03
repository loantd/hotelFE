import HotelService from "../../services/hotelServices";
import { message } from "antd";

export function getListHotels(value = "") {
  return (dispatch) => {
    dispatch({ type: "GET_LIST_VALIDATING" });
    HotelService.getAllHotel(value)
      .then((result) => {
        dispatch({ type: "GET_LIST_SUCCESS", payload: result.data.data });
      })
      .catch((e) => {
        // dispatchError(dispatch, "GET_LIST_ERROR", e, true);
      });
  };
}

export function createHotel(body) {
  return (dispatch) => {
    dispatch({ type: "CREATE_HOTEL_VALIDATING" });
    HotelService.createHotel(body)
      .then((result) => {
        message.success("Tạo thành công");
      })
      .catch((e) => {});
  };
}

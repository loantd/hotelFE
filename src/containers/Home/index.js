import React from "react";
import { connect } from "react-redux";
import HomeContent from "../../components/HomeContent";
import { getListHotels, createHotel } from "./thunkAction";
import EditHotel from "../../components/EditHotel";
import { ModalType } from "../Modal/constants";
function HomeContainer({
  getListHotels,
  data,
  isLoading,
  isLoggedIn,
  editHotel,
  addHotel,
}) {
  return (
    <HomeContent
      isLoading={isLoading}
      data={data}
      getListHotels={getListHotels}
      isLoggedIn={isLoggedIn}
      editHotel={editHotel}
      addHotel={addHotel}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.homeReducer.data,
    isLoading: state.homeReducer.isLoading,
    loggingIn: state.reducerAuthentication.loggingIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListHotels: (value) => dispatch(getListHotels(value)),

    editHotel: (value) => {
      return dispatch({
        type: "SHOW",
        payload: {
          modalType: ModalType.Confirm,
          size: 800,
          headerClass: "hide-header",
          component: EditHotel,
          className: "loginModal",
          title: "Chỉnh sửa thông tin",
          props: { value, createHotel },
        },
      });
    },
    addHotel: () => {
      return dispatch({
        type: "SHOW",
        payload: {
          modalType: ModalType.Confirm,
          size: 800,
          headerClass: "hide-header",
          component: EditHotel,
          className: "loginModal",
          title: "Thêm khách sạn",
          props: { createHotel: (body) => dispatch(createHotel(body)) },
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

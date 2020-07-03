import React from "react";
import { connect } from "react-redux";
import RegisterHotel from "../../components/RegisterHotel";
import { registerUser } from "./actions";
function Register({ registerUser }) {
  return (
    <React.Fragment>
      <RegisterHotel registerUser={registerUser} />
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.homeReducer.data,
    isLoading: state.homeReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (value) => dispatch(registerUser(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);

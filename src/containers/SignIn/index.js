import React from "react";
import { connect } from "react-redux";
import SignIn from "../../components/SignIn";
import { modalActions } from "../Modal/actions";
import { signInUser } from "./actions";
function LoginContainer({ signInUser, closeModal }) {
  return (
    <>
      <SignIn signInUser={signInUser} closeModal={closeModal} />
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: (value) => dispatch(signInUser(value)),
    closeModal: () => dispatch(modalActions.hide()),
  };
};
export default connect(null, mapDispatchToProps)(LoginContainer);

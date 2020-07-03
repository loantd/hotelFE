import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { location } from "../../assets/images";
import { ModalType } from "../../containers/Modal/constants";
import SignInContainer from "../../containers/SignIn";
import { logo } from "../../assets/images";
import "./style.scss";
function HeaderHotel({ requestLogin, isLoggedIn }) {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/home");
  };
  return (
    <div className="container-header">
      <div className="header-logo">
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="header-action">
        <div className="input-location">
          <img src={location} alt="" />
        </div>
        <div className="login-action">
          {isLoggedIn ? (
            <Avatar icon={<UserOutlined />} onClick={handleLogout} />
          ) : (
            <div className="button-login" onClick={requestLogin}>
              Đăng nhập
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loggingIn: state.reducerAuthentication.loggingIn,
  };
};
const mapDispatchToProps = (dispatch) => ({
  requestLogin: () => {
    return dispatch({
      type: "SHOW",
      payload: {
        modalType: ModalType.Confirm,
        size: 510,
        headerClass: "hide-header",
        component: SignInContainer,
        className: "loginModal",
        title: "Đăng nhập",
        props: {},
      },
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderHotel);

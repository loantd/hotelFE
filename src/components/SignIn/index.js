import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { connect } from "react-redux";
import CardContent from "../CardContent";
import { emailRules } from "../../utils";

import ContentLoading from "../ContentLoading";
import SignInContainer from "../../containers/Register";
import { ModalType } from "../../containers/Modal/constants";

import "./style.scss";
function SignIn({ requestRegister, signInUser, isLoading, closeModal }) {
  const onFinish = (values) => {
    if (typeof signInUser === "function" && typeof closeModal === "function") {
      signInUser(values);
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  };

  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="sign-in">
      <ContentLoading loading={isLoading}>
        <CardContent className="sign-in-content">
          <Form
            className="sign-in-content-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item name="email" rules={emailRules}>
              <Input placeholder="email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <Checkbox defaultChecked={true}>Nhớ mật khẩu</Checkbox>

              <span className="sign-in-content-form-forgot">
                Quên mật khẩu?
              </span>
            </Form.Item>
            <div className="sign-in-content-button">
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  width: "inherit",
                  height: "inherit",

                  borderRadius: "10px",
                }}
                // onClick={handleLogin}
                // loading={loginState.get("loading")}
              >
                Đăng nhập
              </Button>
            </div>
          </Form>

          <div className="sign-in-content-register">
            <span>
              Bạn chưa có tài khoản?
              <span
                className="sign-in-content-register-link"
                onClick={requestRegister}
              >
                Đăng ký
              </span>
            </span>
          </div>
        </CardContent>
      </ContentLoading>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.reducerAuthentication.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  requestRegister: () => {
    return dispatch({
      type: "SHOW",
      payload: {
        modalType: ModalType.Confirm,
        size: 520,
        headerClass: "hide-header",
        component: SignInContainer,
        className: "registerModal",
        title: "Đăng ký",
        props: {},
      },
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

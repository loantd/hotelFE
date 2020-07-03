import React from "react";
import { Form, Input, Button } from "antd";

import { connect } from "react-redux";
import CardContent from "../CardContent";
import ContentLoading from "../ContentLoading";
import { emailRules, nameRules } from "../../utils";
import SignInContainer from "../../containers/Register";
import { ModalType } from "../../containers/Modal/constants";

import "./style.scss";
function RegisterHotel({ registerUser, isLoading }) {
  const onFinish = (values) => {
    registerUser(values);
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <div className="sign-in">
      <ContentLoading loading={isLoading}>
        <CardContent className="sign-in-content">
          <Form
            className="sign-in-content-form"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item name="name" rules={nameRules}>
              <Input placeholder="first name" />
            </Form.Item>
            <Form.Item name="userName" rules={nameRules}>
              <Input placeholder="last name" />
            </Form.Item>

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
              >
                Đăng ký
              </Button>
            </div>
          </Form>
        </CardContent>
      </ContentLoading>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.registerReducer.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  requestRegister: () => {
    return dispatch({
      type: "SHOW",
      payload: {
        modalType: ModalType.Custom,
        size: 400,
        headerClass: "hide-header",
        component: SignInContainer,
        className: "registerModal",
        title: "Đăng ký",
        props: {},
      },
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterHotel);

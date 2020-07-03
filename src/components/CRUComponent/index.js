import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

import { AppConstants } from "../../common";
import { modalActions } from "../../containers/Modal/actions";
import { nameRules } from "../../utils";
import ContentLoading from "../ContentLoading";
import UploadImage from "../UploadImage";

const fileAvatarNew = [
  "https://media.gettyimages.com/photos/twilight-in-paradise-picture-id155147526?s=2048x2048",
];
const CRUComponent = ({ props, closeModal, isLoading }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [fileAvatar, setFileAvatar] = useState([]);

  const { value, createHotel } = props;

  useEffect(() => {
    if (!isEmpty(value)) {
      setFileList(AppConstants.fileListTemp);
      setFileAvatar(fileAvatarNew);
      form.setFieldsValue({
        name: value["name"] || "",
        phone: value["phone"] || "",
        description: value["description"] || "",
      });
    } else {
      setFileList([]);
      setFileAvatar([]);
      form.setFieldsValue({
        name: "",
        phone: "",
        description: "",
      });
    }
  }, [value, form]);

  const onFinish = (values) => {
    const newObject = {
      name: values.name,
      description: values.description,
      phone: values.phone,
      avatar: fileAvatar[0],
      photos: AppConstants.fileListTemp,
    };
    if (typeof createHotel === "function") {
      createHotel(newObject);
      setTimeout(() => {
        closeModal();
      }, 1200);
    }
  };
  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item name="name" label="Name" rules={nameRules}>
        <Input placeholder="Tên Hotel" />
      </Form.Item>
      <Form.Item name="phone" label="Phone">
        <Input placeholder="Phone" />
      </Form.Item>
      <Form.Item label="Avatar">
        <UploadImage value={fileAvatar} limit={true} />
      </Form.Item>
      <Form.Item label="Description" name={"description"}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Photos">
        <UploadImage value={fileList} />
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
          Lưu
        </Button>
      </div>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.homeReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(modalActions.hide()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CRUComponent);

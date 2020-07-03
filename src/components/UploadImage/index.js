import React, { useReducer, useEffect } from "react";
import { Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function init() {
  return {
    previewVisible: false,
    previewImage: "",
    fileList: [],
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "preview":
      return { ...state, previewVisible: true, previewImage: action.payload };
    case "change":
      return { ...state, fileList: action.payload };
    case "cancel":
      return { ...state, previewVisible: false };
    case "clear":
      return { ...state, fileList: [] };
    default:
      throw new Error();
  }
}
const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

function UploadImage({ onChange, value, limit }) {
  const [state, dispatch] = useReducer(reducer, null, init);
  useEffect(() => {
    if (value) {
      dispatch({
        type: "change",
        payload: value.map((url) => ({
          uid: url,
          status: "done",
          url,
          response: { data: [{ url }] },
        })),
      });
    }
  }, [value]);
  const handleCancel = () => dispatch({ type: "cancel" });

  const handlePreview = (file) => {
    dispatch({
      type: "preview",
      payload: file.thumbUrl,
    });
  };

  const handleChange = ({ fileList }) => {
    let newFile = fileList.slice(0, 5);
    dispatch({ type: "change", payload: newFile });
    // if (newFile.every((file) => file.status === "done")) {
    //   onChange(newFile);
    // }
  };
  const { previewVisible, previewImage, fileList, previewTitle } = state;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const size = limit ? 1 : 5;
  return (
    <div className="clearfix">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        customRequest={dummyRequest}
        onChange={handleChange}
        multiple
      >
        {fileList.length >= size ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
}
export default UploadImage;

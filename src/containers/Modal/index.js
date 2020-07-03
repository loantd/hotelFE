import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";

import { modalActions } from "./actions";
import { ModalType, ModalResult } from "./constants";

function ModalContainer({ isOpen, options, closeModal, ...rest }) {
  const handleOk = () => {
    const { onClose } = options;
    if (onClose && typeof onClose === "function") {
      onClose(ModalResult.Ok);
    }
    closeModal();
  };
  const handleClose = () => {
    const { onClose } = options;
    if (onClose && typeof onClose === "function") {
      onClose(ModalResult.Cancel);
    }

    closeModal();
  };

  const renderDialogContent = (options) => {
    const { modalType, component, props } = options;
    switch (modalType) {
      case ModalType.Custom:
      case ModalType.Confirm:
        if (modalType === ModalType.Custom || modalType === ModalType.Confirm) {
          if (!component) {
            throw new Error(
              "Please specify the react component when using custom modal!"
            );
          }
          const WrappedComponent = component;

          return (
            <WrappedComponent
              className="customized-dialog-titleffff"
              ok={handleOk}
              {...rest}
              {...props}
            />
          );
        }

        break;
      default:
        return options.message;
    }
  };

  const renderDialogActions = (type) => {
    switch (type) {
      case ModalType.Confirm:
        return <></>;
      case ModalType.Custom:
        return (
          <>
            <Button key="back">Huỷ</Button>
            <Button key="submit" type="primary">
              Lưu
            </Button>
          </>
        );
      default:
        return (
          <>
            <Button key="back">Return</Button>,
            <Button key="submit" type="primary">
              Submit
            </Button>
            ,
          </>
        );
    }
  };
  return (
    <Modal
      title={options.title || ""}
      visible={isOpen}
      width={options.size || 400}
      onOk={handleOk}
      onCancel={handleClose}
      footer={[renderDialogActions(options.modalType)]}
    >
      {renderDialogContent(options)}
    </Modal>
  );
}
const mapStateToProps = (state) => {
  return {
    isOpen: state.modalReducer.isOpen,
    options: state.modalReducer.options,
  };
};
const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(modalActions.hide()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

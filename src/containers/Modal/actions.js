import { modalActionTypes } from "./constants";

const show = (options) => ({
  type: modalActionTypes.SHOW,
  payload: options,
});

const hide = () => ({
  type: modalActionTypes.HIDE,
});

export const modalActions = {
  show,
  hide,
};

import { Spin } from "antd";
import React from "react";
import "./style.scss";

export default function ContentLoading({ loading, children }) {
  if (children) {
    return (
      <Spin spinning={loading} delay={250}>
        {children}
      </Spin>
    );
  } else {
    return (
      <div className="content-loading">
        <Spin />
      </div>
    );
  }
}

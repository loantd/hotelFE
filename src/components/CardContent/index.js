import PropTypes from "prop-types";
import React from "react";
import { cx } from "../../utils";
import Content from "../Content";
import "./style.scss";

export default function CardContent({ className, style, children }) {
  return (
    <Content className={cx("app-card-content", className)} style={style}>
      {children}
    </Content>
  );
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

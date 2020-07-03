import PropTypes from "prop-types";
import React from "react";
import { cx } from "../../utils";
import "./style.scss";

export default function Content({ className, style, children }) {
  return (
    <div className={cx("app-content", className)} style={style}>
      {children}
    </div>
  );
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

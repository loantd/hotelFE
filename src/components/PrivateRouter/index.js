import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(myProps) =>
        isLoggedIn === true ? (
          window.location.pathname === "/" ? (
            <Redirect to={"/home"} />
          ) : (
            <Component {...myProps} />
          )
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  isLoggedIn: PropTypes.bool,
};

export default PrivateRoute;

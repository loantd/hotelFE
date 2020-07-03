import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";

import Booking from "./Booking";

export const MainApp = ({ match }) => {
  return (
    <div className="app-container">
      <Switch>
        <Route path={`${match.url}booking`} component={Booking} />
      </Switch>
    </div>
  );
};

MainApp.propTypes = {
  match: PropTypes.object,
};

export default withRouter(MainApp);

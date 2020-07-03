import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";
import BookingDetailsRouter from "./BookingDetails";

const BookingRoutes = ({ match }) => {
  return (
    <Switch key={"Booking"}>
      <Route
        path={`${match.url}/:id`}
        exact
        render={(props) => <BookingDetailsRouter match={match} {...props} />}
      />
    </Switch>
  );
};

BookingRoutes.propTypes = {
  match: PropTypes.object,
};

export default withRouter(BookingRoutes);

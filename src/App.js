import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import HomeContainer from "./containers/Home";
import BookingDetailsContainer from "./containers/BookingDetails";
import ModalContainer from "./containers/Modal";
import Layout from "./Layout";

import PrivateRoute from "./components/PrivateRouter";
import MainRoute from "./routes/index";
import "antd/dist/antd.css";
function App({ match }) {
  const tokenId = localStorage.getItem("token");
  let isLoggedIn = tokenId !== null ? true : false;
  const ownerRoutes = (
    <>
      <PrivateRoute
        path={`${match.url}`}
        isLoggedIn={isLoggedIn}
        component={MainRoute}
      />
    </>
  );
  const userGroup = ["user"];
  const renderRoutesByUserGroup = () => {
    if (userGroup.includes("user")) {
      return ownerRoutes;
    }

    return <Redirect to="/home" />;
  };

  const app = (
    <Switch>
      <Layout isLoggedIn={isLoggedIn}>
        <Route
          path="/"
          exact
          render={() =>
            isLoggedIn ? <Redirect to="/home" /> : <Redirect to="/home" />
          }
        />

        <Route
          path="/home"
          render={(props) => (
            <HomeContainer {...props} isLoggedIn={isLoggedIn} />
          )}
        />
        <Route
          path="/hotel/:id"
          render={(props) => (
            <BookingDetailsContainer {...props} isLoggedIn={isLoggedIn} />
          )}
        />
        {renderRoutesByUserGroup()}
      </Layout>
    </Switch>
  );
  return (
    <>
      {app}
      <ModalContainer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loggingIn: state.reducerAuthentication.loggingIn,
  };
};

const connectedApp = connect(mapStateToProps)(App);
export default withRouter(connectedApp);

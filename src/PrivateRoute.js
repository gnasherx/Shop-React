import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "./config/firebase";

class PrivateRoute extends Component {
  state = {
    pending: true,
    loggedIn: undefined
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        pending: false,
        loggedIn: !!user
      });
    });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={renderProps => {
          if (this.state.pending) return null;
          return this.state.loggedIn ? (
            <Component {...renderProps} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: renderProps.location }
              }}
            />
          );
        }}
      />
    );
  }
}

export default PrivateRoute;

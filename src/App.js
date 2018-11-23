import React, { Component } from "react";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";
import Signin from "./pages/Signin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";
import Signin from "./pages/Signin";
import ProductDeatils from "./pages/ProductDetails";
import AddNewProduct from "./pages/admin/AddNewProduct";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/admin" component={AddNewProduct} />
          <PrivateRoute
            exact
            path="/productDetails/:productId"
            component={ProductDeatils}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

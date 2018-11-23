import React, { Component, Fragment } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { customerLogin } from "../store/actions/authActions";
import { connect } from "react-redux";

class Signup extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    this.props.customerLogin(this.state);
  };

  componentWillUpdate(nextProps) {
    if (nextProps.user) {
      this.props.history.push("/");
    }
  }

  render() {
    let { email, password } = { ...this.state };

    return (
      <Fragment>
        <div className="container">
          <div className="row d-flex align-items-center ">
            <div className="col ">
              <div className="d-flex m-3  justify-content-center">
                <h4>CUSTOMER LOGIN</h4>
              </div>
              <Input
                value={email}
                type="email"
                label={"Email"}
                name="email"
                onChange={this.onChange}
              />
              <Input
                value={password}
                type="password"
                label={"Password"}
                name="password"
                onChange={this.onChange}
              />
              <div className="text-center">
                <Button
                  className="d-flex justify-content-center"
                  onClick={this.onClick}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    customerLogin: user => dispatch(customerLogin(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

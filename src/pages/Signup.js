import React, { Component, Fragment } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { createNewAccount } from "../store/actions/authActions";
import { connect } from "react-redux";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    this.props.createNewAccount(this.state);
  };

  render() {
    let { firstName, lastName, email, password } = { ...this.state };

    return (
      <Fragment>
        <div className="container">
          <div className="row d-flex align-items-center ">
            <div className="col ">
              <div className="d-flex m-3  justify-content-center">
                <h4>CREATE ACCOUNT</h4>
              </div>
              <Input
                value={firstName}
                type="text"
                label={"First Name"}
                name="firstName"
                onChange={this.onChange}
              />
              <Input
                value={lastName}
                type="text"
                label={"Last Name"}
                name="lastName"
                onChange={this.onChange}
              />
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
                  Create an account
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
    createNewAccount: user => dispatch(createNewAccount(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

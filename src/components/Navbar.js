import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions";
import { getCartItemsCount } from "../store/actions/cartActions";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    this.props.getCartItemsCount();
  }

  componentDidUpdate() {
    this.props.getCartItemsCount();
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Shop-React
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Men <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <Link to="/cart">
              <button type="button" className="btn btn-warning mr-4">
                Cart{" "}
                {this.props.cartItemCount !== 0 ? (
                  <span className="badge badge-light ml-2">
                    {this.props.cartItemCount}
                  </span>
                ) : null}
              </button>
            </Link>
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              onClick={() => this.props.logout()}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItemCount: state.cartReducer.cartItemCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getCartItemsCount: () => dispatch(getCartItemsCount())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

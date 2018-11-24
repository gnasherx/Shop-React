import React, { Component, Fragment } from "react";
import {
  fetchProductIdDetails,
  addToCart
} from "../store/actions/productsActions";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";

class ProductDetails extends Component {
  componentDidMount() {
    let productKey = this.props.match.params.productKey;
    this.props.fetchProductIdDetails(productKey);
  }

  render() {
    let { image, name, price, productKey } = { ...this.props.product };

    return (
      <Fragment>
        <div style={{ marginBottom: "80px" }}>
          <Navbar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.props.inCart.includes(productKey) ? (
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Check your cart</strong> This product is already there
                  in your cart
                  <button
                    id="alert"
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <img alt="" src={image} width="400px" height="600px" />
            </div>
            <div className="col-7">
              <p className="h5 mb-3 text-uppercase font-weight-bold">{name}</p>
              <div className="d-flex flex-row mb-5">
                <p className="h6 pr-2">PRODUCT TYPE</p>
                <p className="h6 pl-2">Sweater</p>
              </div>
              <p className="h4 red font-weight-bold mb-4">${price}</p>
              <button
                className="btn btn-success"
                onClick={() => this.props.addToCart(this.props.product)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.productReducer.productIdDetails,
    inCart: state.productReducer.inCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductIdDetails: productKey =>
      dispatch(fetchProductIdDetails(productKey)),
    addToCart: product => dispatch(addToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);

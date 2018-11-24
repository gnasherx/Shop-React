import React, { Component } from "react";
import { fetchProductIdDetails } from "../store/actions/productsActions";
import { connect } from "react-redux";

class ProductDetails extends Component {
  componentDidMount() {
    let productId = this.props.match.params.productId;
    this.props.fetchProductIdDetails(productId);
  }

  render() {
    console.log("Product : ", this.props.product);
    console.log(JSON.stringify(this.props.product));
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img alt="" src="" width="400px" height="600px" />
          </div>
          <div className="col-7">
            <p className="h5 mb-3 text-uppercase font-weight-bold">"mm"</p>
            <div className="d-flex flex-row mb-5">
              <p className="h6 pr-2">PRODUCT TYPE</p>
              <p className="h6 pl-2">Sweater</p>
            </div>
            <p className="h4 red font-weight-bold mb-4">$00</p>
            <button className="btn btn-success">ADD TO CART</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.productReducer.productIdDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductIdDetails: productId =>
      dispatch(fetchProductIdDetails(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);

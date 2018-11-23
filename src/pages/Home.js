import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../store/actions/productsActions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    let products = this.props.products.map((p, i) => {
      return (
        <div key={i} className="col-sm-12 col-md-6 col-lg-4 col-xl-4 pb-4">
          <div className="card text-center">
            <img className="card-img-top" src={p.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">${p.price}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{products}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    products: state.productReducer.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../store/actions/productsActions";
import { Link } from "react-router-dom";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     totalProducts: 0,
  //     allProducts: []
  //   };
  // }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps.products.length);
  //   console.log(prevState.totalProducts);
  //   if (nextProps.products.length !== prevState.totalProducts) {
  //     console.log("Inside nextprops checking");
  //     return {
  //       totalProducts: nextProps.products.length,
  //       allProducts: nextProps.products
  //     };
  //   }

  //   return null;
  // }

  render() {
    let products = this.props.products.map((p, i) => {
      return (
        <div key={i} className="col-sm-12 col-md-6 col-lg-4 col-xl-4 pb-4">
          <Link to={"/productDetails/" + i}>
            <div className="card text-center">
              <img className="card-img-top" src={p.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">${p.price}</p>
              </div>
            </div>
          </Link>
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

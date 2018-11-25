import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { fetchCartItems } from "../store/actions/cartActions";

class Cart extends Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

 
  render() {
    return (
      <Fragment>
        <div style={{ marginBottom: "80px" }}>
          <Navbar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.props.allCartItems.length !== 0 ? (
                this.props.allCartItems.map((cartItem, i) => (
                  <div className="card mb-3" key={i}>
                    <div className="d-flex justify-content-row align-items-start">
                      <div>
                        <img
                          className="card-img"
                          src={cartItem.image}
                          alt=""
                          style={{
                            width: "150px",
                            padding: "20px",
                            maxWidth: "100%"
                          }}
                        />
                      </div>

                      <div>
                        <div className="card-body">
                          <h5 className="card-title">{cartItem.name}</h5>
                          <p className="card-text ">${cartItem.price}</p>
                          <button className="btn btn-danger mr-2">
                            Remove
                          </button>
                          <button className="btn btn-success ml-2">
                            Proceed to checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Cart is Empty</p>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCartItems: state.cartReducer.allCartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

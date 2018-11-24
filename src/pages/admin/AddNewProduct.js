import React, { Component } from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { connect } from "react-redux";
import { addProduct } from "../../store/actions/adminProduct";

class AddNewProducts extends Component {
  state = {
    image: "",
    price: 0,
    name: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { image, price, name } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex m-3  justify-content-center">
              <h4>ADMIN/ ADD PRODUCTS</h4>
            </div>
            <Input
              value={name}
              type="name"
              label={"Product name"}
              name="name"
              onChange={this.onChange}
            />
            <Input
              value={image}
              type="text"
              label={"Image"}
              name="image"
              onChange={this.onChange}
            />
            <Input
              value={price}
              type="text"
              label={"Price"}
              name="price"
              onChange={this.onChange}
            />
            <div className="text-center">
              <Button
                className="d-flex justify-content-center"
                onClick={() => {
                  this.props.addProduct(this.state);
                  this.setState({ image: "", name: "", price: 0 });
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewProducts);

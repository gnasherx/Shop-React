import firebase from "../../config/firebase";

const database = firebase.database();

export const fetchAllProducts = () => dispatch => {
  let allProducts = [];
  database.ref("products").once("value", snapshot => {
    snapshot.forEach(product => {
      allProducts.push(product.val());
    });
    dispatch({ type: "GET_ALL_PRODUCTS", products: allProducts });
  });
};

export const fetchProductIdDetails = productKey => dispatch => {
  database
    .ref("products")
    .orderByChild("productKey")
    .equalTo(productKey)
    .on("value", snapshot => {
      let productData = null;
      snapshot.forEach(function(data) {
        productData = data.val();
      });
      dispatch({
        type: "FETCH_PRODUCT_ID_DETAILS",
        productIdDetails: productData
      });
    });
};

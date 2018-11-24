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

export const fetchProductIdDetails = productId => dispatch => {
  database
    .ref("products")
    .orderByKey()
    .equalTo(productId)
    .once("value", snapshot => {
      console.log("Snapshot: ", snapshot.val());
      dispatch({
        type: "FETCH_PRODUCT_ID_DETAILS",
        productIdDetails: snapshot.val()
      });
    });
};

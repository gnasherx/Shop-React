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

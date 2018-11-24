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

export const addToCart = product => dispatch => {
  const currentUser = firebase.auth().currentUser.uid;

  // Checking the product(key) is already in cart
  let pk = null;
  database
    .ref("cart/" + currentUser)
    .orderByChild("productKey")
    .equalTo(product.productKey)
    .once("value", snapshot => {
      snapshot.forEach(function(data) {
        pk = data.key;
      });
    });

  //If product is not there in cart then add it
  if (pk === null) {
    console.log("PK: ", pk);
    database
      .ref("cart/" + currentUser + "/" + product.productKey)
      .set(product)
      .then(() => {
        dispatch({ type: "ADDED_TO_CART" });
      })
      .catch(error => {
        dispatch({ type: "FAILED_TO_ADD_PRODUCT_INTO_CART", error: error });
      });
  } else {
    dispatch({ type: "PRODUCT_ALREADY_IN_CART", product: product });
  }
};

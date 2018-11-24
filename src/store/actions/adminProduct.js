import firebase from "../../config/firebase";
const database = firebase.database();

export const addProduct = product => dispatch => {
  let productKey = database.ref("products").push().key;
  database
    .ref("products")
    .push(productKey)
    .set({ ...product, productKey: productKey })
    .then(() =>
      dispatch({
        type: "SUCCESSFULLY_ADDED_NEW_PRODUCT"
      })
    )
    .catch(error =>
      dispatch({
        type: "FAILED_TO_ADD_NEW_PRODUCT",
        error: error
      })
    );
};

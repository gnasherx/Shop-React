import firebase from "../../config/firebase";

const database = firebase.database();

export const getCartItemsCount = () => dispatch => {
  const currentUser = firebase.auth().currentUser.uid;
  database.ref("cart/" + currentUser).on("value", snapshot => {
    dispatch({
      type: "GOT_CART_ITEM_COUNT",
      cartItemCount: snapshot.numChildren()
    });
  });
};

export const fetchCartItems = () => dispatch => {
  const currentUser = firebase.auth().currentUser.uid;
  database.ref("cart/" + currentUser);
  const allCartItems = [];
  database.ref("cart/" + currentUser).on("value", snapshot => {
    snapshot.forEach(product => {
      allCartItems.push(product.val());
    });
    dispatch({ type: "GET_ALL_CART_PRODUCTS", allCartItems: allCartItems });
  });
};

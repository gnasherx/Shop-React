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

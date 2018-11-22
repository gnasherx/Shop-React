import firebase from "../../config/firebase";

export const createNewAccount = user => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(function() {
        dispatch({ type: "CREATE_NEW_ACCOUNT", user: user });
      })
      .catch(function(error) {
        console.log("Somethig went wrong, here is the error : ", error);
        dispatch({ type: "FALIED-TO-CREATE-NEW-ACCOUNT", error: error });
      });
  };
};

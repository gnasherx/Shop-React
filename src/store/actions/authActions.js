import firebase from "../../config/firebase";
const database = firebase.database();

export const createNewAccount = user => dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(response => {
      console.log("User : ", response);

      database.ref("users/" + response.user.uid).set({
        firstName: user.firstName,
        lastName: user.lastName,
        emaill: user.email
      });
    })
    .then(() => {
      dispatch({ type: "CREATE_NEW_ACCOUNT", signupUser: user });
    })
    .catch(error => {
      console.log(
        "Somethig went wrong while creating your new account, here is a error : ",
        error
      );
      dispatch({ type: "FALIED-TO-CREATE-NEW-ACCOUNT", signupError: error });
    });
};

export const customerLogin = user => dispatch => {
  const { email, password } = user;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: "CUSTOMER_LOGIN", loginUser: user });
    })
    .catch(error => {
      console.log(
        "Something went wrong while log in, here is a error, ",
        error
      );
      dispatch({ type: "FAILED_CUSTOMRE_LOGIN", loginError: error });
    });
};

export const logout = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(function() {
     dispatch({type: "LOGOUT_SUCCESS"})
    })
    .catch(function(error) {
      console.log("Failed in logout, error is: ", error)
    });
};

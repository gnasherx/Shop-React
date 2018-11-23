import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyASfahHeu0gMUYiRF4VvcktfaNJkXqnjxM",
  authDomain: "shop-react-67d35.firebaseapp.com",
  databaseURL: "https://shop-react-67d35.firebaseio.com",
  projectId: "shop-react-67d35",
  storageBucket: "",
  messagingSenderId: "487395755797"
};
firebase.initializeApp(config);

export default firebase;

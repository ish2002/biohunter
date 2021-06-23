import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB5HC8znRmDuoj18zGz6_aO1fADDTCsX7Y",
  authDomain: "biohunterslogin.firebaseapp.com",
  projectId: "biohunterslogin",
  storageBucket: "biohunterslogin.appspot.com",
  messagingSenderId: "144349588422",
  appId: "1:144349588422:web:e31084b29b34bacf8f60c7"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
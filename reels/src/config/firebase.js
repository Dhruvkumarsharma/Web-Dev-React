import firebase from "firebase";

let firebaseConfig = {
  // apiKey: "AIzaSyBNxnJ4_z5PMsQQko9VX4dd527uPl7eSPE",
  // authDomain: "login-9cf70.firebaseapp.com",
  // projectId: "login-9cf70",
  // storageBucket: "login-9cf70.appspot.com",
  // messagingSenderId: "359647159751",
  // appId: "1:359647159751:web:c32edb0675ad6f849c25e2",
  // measurementId: "G-4LJNJ8T56C"

  apiKey: "AIzaSyAPKD7tXNJFRoJcHy6OtLfcp108PFIUU1A",
    authDomain: "reelsapp-94cce.firebaseapp.com",
    projectId: "reelsapp-94cce",
    storageBucket: "reelsapp-94cce.appspot.com",
    messagingSenderId: "68487079826",
    appId: "1:68487079826:web:42a957b6f7241a732b034b",
    // measurementId: "G-ZMYETH7XK8"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore();
export let timeStamp = firebase.firestore.FieldValue.serverTimestamp;
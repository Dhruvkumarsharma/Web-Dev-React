import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyBNxnJ4_z5PMsQQko9VX4dd527uPl7eSPE",
    authDomain: "login-9cf70.firebaseapp.com",
    projectId: "login-9cf70",
    storageBucket: "login-9cf70.appspot.com",
    messagingSenderId: "359647159751",
    appId: "1:359647159751:web:c32edb0675ad6f849c25e2"
    // measurementId: "G-4LJNJ8T56C"
  };
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  export let firebaseAuth = firebaseApp.auth();
  export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore();
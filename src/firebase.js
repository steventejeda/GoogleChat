import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDNVxS3ZwdEp7bUJw1itrVdRsiHrKTaYn0",
    authDomain: "instachat-84f2c.firebaseapp.com",
    projectId: "instachat-84f2c",
    storageBucket: "instachat-84f2c.appspot.com",
    messagingSenderId: "225187512925",
    appId: "1:225187512925:web:0d159123aaded7f8d683b4",
    measurementId: "G-XK4PHTQB7X"
  }).auth();
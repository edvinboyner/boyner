import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB84CrZjFW3Fc9iLHPvFUxzt2BetbzIPbg",
  authDomain: "boyner-website.firebaseapp.com",
  databaseURL: "https://boyner-website.firebaseio.com",
  projectId: "boyner-website",
  storageBucket: "boyner-website.appspot.com",
  messagingSenderId: "235905184232",
  appId: "1:235905184232:web:2b8f14424d51d92986b45d",
  measurementId: "G-MPZQ2VXDX1"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();

export const db = baseDb;

export default firebase;

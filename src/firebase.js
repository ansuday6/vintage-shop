import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCjSeoX3BvdMFMw4I6k14xLgkECVz6eydc",
  authDomain: "vintage-shop-12d64.firebaseapp.com",
  projectId: "vintage-shop-12d64",
  storageBucket: "vintage-shop-12d64.appspot.com",
  messagingSenderId: "545104099307",
  appId: "1:545104099307:web:54f7e28668b70d77b24bae",
  measurementId: "G-RDNKL8E39L"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };
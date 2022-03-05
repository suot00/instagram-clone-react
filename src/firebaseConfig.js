import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2jGeWtYvMdzVOsjcG7lJv_zpdu0pAXg0",
  authDomain: "instagram-clone-react-f9d3f.firebaseapp.com",
  projectId: "instagram-clone-react-f9d3f",
  storageBucket: "instagram-clone-react-f9d3f.appspot.com",
  messagingSenderId: "323214745376",
  appId: "1:323214745376:web:c691c22f8b97ae46a50145",
  measurementId: "G-LWP8T7BBGG",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };

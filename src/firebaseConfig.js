import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrN475ocQzcifbFmDJY9or-zOtkTNPXVg",
  authDomain: "instagram-clone-react-9fa7e.firebaseapp.com",
  projectId: "instagram-clone-react-9fa7e",
  storageBucket: "instagram-clone-react-9fa7e.appspot.com",
  messagingSenderId: "635006955970",
  appId: "1:635006955970:web:c211e6580105febba5265b",
  measurementId: "G-1FDRS2C5DC",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };

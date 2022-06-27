import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5N3NoK4FqI-pJ99SGacCXqeQadznkbxM",
  authDomain: "medfit-b64e7.firebaseapp.com",
  projectId: "medfit-b64e7",
  storageBucket: "medfit-b64e7.appspot.com",
  messagingSenderId: "989410326734",
  appId: "1:989410326734:web:3837130508c876f4a7789f",
  measurementId: "G-6RWY2L9X3T",
};
firebase.initializeApp(firebaseConfig);

export { firebase };

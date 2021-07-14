import firebase from "firebase/app";
import "firebase/firebase-firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDSevRD7shY3FstJzLRTqQVj1ftjRtyXIw",
  authDomain: "chapsnat-ashwin.firebaseapp.com",
  projectId: "chapsnat-ashwin",
  storageBucket: "chapsnat-ashwin.appspot.com",
  messagingSenderId: "428021707643",
  appId: "1:428021707643:web:6b23359671a299a8e243de",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let firestore = firebase.firestore();

export default firestore;

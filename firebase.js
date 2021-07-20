import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
var firebaseConfig = {
  apiKey: "AIzaSyCYn4bg-Xvr4yQNE8ff8Yv4uY_WqO41ckw",
  authDomain: "chapsnat-jenny.firebaseapp.com",
  projectId: "chapsnat-jenny",
  storageBucket: "chapsnat-jenny.appspot.com",
  messagingSenderId: "628497955369",
  appId: "1:628497955369:web:167f67dec321bc208aba38",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;

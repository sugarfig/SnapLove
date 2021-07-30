import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
const firebaseConfig = {
    apiKey: "AIzaSyBtAEPPYch6-PBX0YFfFmieK34IxFiEktE",
    authDomain: "snaplove-6635c.firebaseapp.com",
    projectId: "snaplove-6635c",
    storageBucket: "snaplove-6635c.appspot.com",
    messagingSenderId: "752209445124",
    appId: "1:752209445124:web:e8414e37ba4c38d542d051"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;

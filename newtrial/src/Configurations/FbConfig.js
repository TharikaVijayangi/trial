// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyCNC9nvpysp6s1kd1nqqapQAK_6jHYs2ao",
    authDomain: "sample-project-8b20b.firebaseapp.com",
    projectId: "sample-project-8b20b",
    storageBucket: "sample-project-8b20b.appspot.com",
    messagingSenderId: "156355357789",
    appId: "1:156355357789:web:804952a028aefd91e671b4",
    measurementId: "G-RMR3099J39"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
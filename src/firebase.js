import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBmk0D4gRRX_2pW_GtQQsw3jekROlT5DVg",
    authDomain: "otp-app-demo-6770f.firebaseapp.com",
    projectId: "otp-app-demo-6770f",
    storageBucket: "otp-app-demo-6770f.appspot.com",
    messagingSenderId: "32572480615",
    appId: "1:32572480615:web:41f9d17ee13b08036708c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase

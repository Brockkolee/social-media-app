// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider,createUserWithEmailAndPassword,TwitterAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtOTM14kxDXbweLTw4ArsJqdTFrXaW0fc",
  authDomain: "react-b42f9.firebaseapp.com",
  projectId: "react-b42f9",
  storageBucket: "react-b42f9.appspot.com",
//   messagingSenderId: "784056973410",
  appId: "1:784056973410:web:c7e08937504bc919b2793b",
//   measurementId: "G-JB90G5X6RY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();


  
  export { auth, googleProvider, facebookProvider, twitterProvider, createUserWithEmailAndPassword };
  

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf4_-oLqVojXc0Qcq2x9hwdHvmHdKj_hs",
  authDomain: "fir-auth-ad995.firebaseapp.com",
  projectId: "fir-auth-ad995",
  storageBucket: "fir-auth-ad995.appspot.com",
  messagingSenderId: "31443453263",
  appId: "1:31443453263:web:837cfe3b13860d913d713a"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else
{
    app = firebase.app()
}
const auth = firebase.auth()

export { auth };
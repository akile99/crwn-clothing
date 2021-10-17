import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkmFBdhUPyhk1GpnemQY57o4oQmgw_nTQ",
  authDomain: "crwn-db-fbf01.firebaseapp.com",
  projectId: "crwn-db-fbf01",
  storageBucket: "crwn-db-fbf01.appspot.com",
  messagingSenderId: "963914561615",
  appId: "1:963914561615:web:4bc76b6fb7562836b5123a",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

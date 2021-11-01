// import { initializeApp } from "firebase/app"; //v9
// import { getFirestore } from "firebase/firestore"; //v9
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; //v9
// import { getDocs } from "firebase/firestore";

import firebase from "firebase/compat/app"; //v8
import "firebase/compat/firestore"; //v8
import "firebase/compat/auth"; //v8

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

firebase.initializeApp(firebaseConfig); //v8

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollecitonAndDocuments = async (collectionKey, obectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  obectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth(); //v8
export const firestore = firebase.firestore(); //v8

const provider = new firebase.auth.GoogleAuthProvider(); //v8
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider); //v8

export default firebase; //v8

// initializeApp(firebaseConfig); //v9
// export const auth = getAuth(); //v9
// export const firestore = getFirestore(); //v9

// const provider = new GoogleAuthProvider(); //v9
// provider.setCustomParameters({ prompt: "select_account" }); //v9
// export const signInWithGoogle = () => signInWithPopup(auth, provider); //v9

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAkz7ZOqeP0IolOTPmHTm1LKQWjyaf6ons",
  authDomain: "glad-rags-db.firebaseapp.com",
  databaseURL: "https://glad-rags-db.firebaseio.com",
  projectId: "glad-rags-db",
  storageBucket: "glad-rags-db.appspot.com",
  messagingSenderId: "793249517259",
  appId: "1:793249517259:web:48008d568445d7a1d8554e",
  measurementId: "G-N7F77FQ35N",
};

export const createUserProfileDocuement = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (error) {
      console.log("error creating user");
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

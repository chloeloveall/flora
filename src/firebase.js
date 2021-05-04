import firebase from 'firebase/app'
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

const provider2 = new firebase.auth.GithubAuthProvider();
export const signInWithGithub = () => {
  auth.signInWithPopup(provider2);
}

const provider3 = new firebase.auth.TwitterAuthProvider();
export const signInWithTwitter = () => {
  auth.signInWithPopup(provider3);
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const auth = firebase.auth();
// export const firestore = firebase.firestore();

export default firebase;
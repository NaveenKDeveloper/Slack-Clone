import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2H3ycGvSPKoSpWEdh5aU9mf0SlqPUOtg",
  authDomain: "slack-clone-naveen.firebaseapp.com",
  projectId: "slack-clone-naveen",
  storageBucket: "slack-clone-naveen.appspot.com",
  messagingSenderId: "535394744957",
  appId: "1:535394744957:web:3d125522bdc092f1d4cf14",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
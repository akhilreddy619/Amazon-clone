import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBI6hENltiaclZIVaupiKavUYHoDqEYJN4",
  authDomain: "challange-e034f.firebaseapp.com",
  projectId: "challange-e034f",
  storageBucket: "challange-e034f.appspot.com",
  messagingSenderId: "330919240446",
  appId: "1:330919240446:web:8d834cf0ee087c12bcfbaf",
  measurementId: "G-FX1772Y9D8",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoq3HX1N-ZjuBhZDeJKX4fLdB5qPT9Afk",
  authDomain: "tru-v-82ce9.firebaseapp.com",
  projectId: "tru-v-82ce9",
  storageBucket: "tru-v-82ce9.appspot.com",
  messagingSenderId: "948643148524",
  appId: "1:948643148524:web:4107ac87968a4e5d312bc9",
  measurementId: "G-H1TVQ31611"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
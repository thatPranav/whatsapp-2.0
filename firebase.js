import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAsLt1y7eTGYTDdHZ5qqFpaXFcXD_sP2o",
  authDomain: "whatsapp-2-971e9.firebaseapp.com",
  projectId: "whatsapp-2-971e9",
  storageBucket: "whatsapp-2-971e9.appspot.com",
  messagingSenderId: "747612390548",
  appId: "1:747612390548:web:aa69803d7581c2acada081",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }; 
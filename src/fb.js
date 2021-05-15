import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDZ8QHy8qWRK2dovEO36eCeRiOXbBCpgGI",
    authDomain: "tiktok-eff76.firebaseapp.com",
    projectId: "tiktok-eff76",
    storageBucket: "tiktok-eff76.appspot.com",
    messagingSenderId: "363920608944",
    appId: "1:363920608944:web:bc704d2e212828b366f575",
    measurementId: "G-97FM5LLPV2"
  };

  // const firebaseApp = firebaseConfig.initializeApp(firebaseConfig);
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyBzcxbk1sflbQyCXPQ0Wmn89GDqk_pDUHw",
    authDomain: "crwn-db-44ba1.firebaseapp.com",
    projectId: "crwn-db-44ba1",
    storageBucket: "crwn-db-44ba1.appspot.com",
    messagingSenderId: "1041977249144",
    appId: "1:1041977249144:web:4634089ebea15bf5830c8d",
    measurementId: "G-X9Q1SWD4MC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  



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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        // with date you creat a new javascript Object
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
  };

 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();



  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



  



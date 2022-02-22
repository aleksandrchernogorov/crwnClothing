import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import  { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVPtAKO9llR89v_0Wq6fWkdVGpkEKTakk",
    authDomain: "crwn-clthng-a3.firebaseapp.com",
    projectId: "crwn-clthng-a3",
    storageBucket: "crwn-clthng-a3.appspot.com",
    messagingSenderId: "387235766004",
    appId: "1:387235766004:web:179cc1d8fc4bde7a2008a1",
    measurementId: "G-MW0CVB05NB"
}

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, provider)
.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

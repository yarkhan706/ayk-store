import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9j0McARvmXIOEDIwRJeuXzNfQUWav6LU",
    authDomain: "ayk-store-db.firebaseapp.com",
    projectId: "ayk-store-db",
    storageBucket: "ayk-store-db.appspot.com",
    messagingSenderId: "531433569977",
    appId: "1:531433569977:web:1353e9f18868f824962568"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.getCustomParameters({
    prompt : "select_account"
  })

  export const auth = getAuth();
  export const googleSignInWithPopup = () => signInWithPopup(auth,provider)
import {initializeApp} from 'firebase/app'
import {getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

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
  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  googleProvider.getCustomParameters({
    prompt : 'select_account'
  })

  export const auth = getAuth();
  export const googleSignInWithPopup = () => signInWithPopup(auth,googleProvider)

  //firebase database

  export const db = getFirestore();
  export const getUserDocumentFromAuth = async (userAuth,
    additionalInformation = {displayName: ''}) => {
    if(!userAuth) return;
    
    const userReference = doc(db,'users',userAuth.uid);

    const documentSnapShot = await getDoc(userReference);

    //if doesnot exits
    if(!documentSnapShot.exists())
    {
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userReference , {displayName,email,createdAt
            ,...additionalInformation});

        }
        catch(error)
        {
            console.log(error.message)
        }
    }

    return userReference;
  }

  export const signUpUserWithEmailAndPassword = async (email,password) =>
  {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signInUserWithEmailAndPassword = async (email,password) =>
  {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
  }

  export const userSignOut = async() => await signOut(auth)

  export const onAuthStateChangedListener = (callBack) => onAuthStateChanged(auth,callBack)
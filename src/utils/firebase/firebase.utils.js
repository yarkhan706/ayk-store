import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
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

  const provider = new GoogleAuthProvider();
  provider.getCustomParameters({
    prompt : "select_account"
  })

  export const auth = getAuth();
  export const googleSignInWithPopup = () => signInWithPopup(auth,provider)


  //firebase database

  export const db = getFirestore();
  export const getUserDocumentFromAuth = async (userAuth) => {
    
    const userReference = doc(db,'users',userAuth.uid);
    console.log(userReference)

    const documentSnapShot = await getDoc(userReference);
    console.log(documentSnapShot)
    console.log(documentSnapShot.exists())

    //if doesnot exits
    if(!documentSnapShot.exists())
    {
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userReference , {displayName,email,createdAt});

        }
        catch(error)
        {
            console.log(error.message)
        }
    }

    return userReference;
  }
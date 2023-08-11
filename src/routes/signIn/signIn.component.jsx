import {auth,googleSignInWithPopup,getUserDocumentFromAuth,googleSignInWithRedirect} from '../../utils/firebase/firebase.utils'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

const SignIn = () =>
{
    
    useEffect(() => {
        const logGoogleUserRedirect = async () => {
            const response = await getRedirectResult(auth)
            if(response)
            {
                const userDocRef = getUserDocumentFromAuth(response.user);
            }
        }
        logGoogleUserRedirect();
    },[])
    
    const logGoogleUser = async () =>
    {
        const {user} = await googleSignInWithPopup();
        const userDocref = getUserDocumentFromAuth(user)
    } 

    return(
        <div>
            <h1>SIGN PAGE</h1>
            <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
            <button onClick={googleSignInWithRedirect}>SIGN IN WITH GOOGLE REDIRECT</button>
        </div>
    )
}

export default SignIn;
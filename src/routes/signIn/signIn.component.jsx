import {googleSignInWithPopup,getUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'


const SignIn = () =>
{
    
    const logGoogleUser = async () =>
    {
        const {user} = await googleSignInWithPopup();
        getUserDocumentFromAuth(user)
    } 

    return(
        <div>
            <h1>SIGN PAGE</h1>
            <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
        </div>
    )
}

export default SignIn;
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {googleSignInWithPopup,getUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () =>
{
    
    const logGoogleUser = async () =>
    {
        const {user} = await googleSignInWithPopup();
        const userDocref = getUserDocumentFromAuth(user)
    } 

    return(
        <div>
            <h1>SIGN PAGE</h1>
            <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;
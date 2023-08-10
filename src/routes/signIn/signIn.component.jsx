import {googleSignInWithPopup} from '../../utils/firebase/firebase.utils'


const SignIn = () =>
{
    //causing error in console about cross origins
    const logGoogleUser = async () =>
    {
        const response = await googleSignInWithPopup();
        console.log(response)
    } 

    return(
        <div>
            <h1>SIGN PAGE</h1>
            <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
        </div>
    )
}

export default SignIn;
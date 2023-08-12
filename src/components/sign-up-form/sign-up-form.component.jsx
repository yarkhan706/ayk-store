import '../sign-up-form/sign-up-form.styles.scss'
import { useState } from 'react';
import { signUpUserWithEmailAndPassword , getUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () =>{

    const [formField,setFormField] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formField;

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        if(password != confirmPassword)
        {
            alert("PASSWORDS DO NOT MATCHES");
            return;
        }

        try{
            const response = await signUpUserWithEmailAndPassword(email,password)
            console.log(response)


        }catch(error)
        {
            console.log(error.message)
        }
    } 

    const handleChange = (event) =>
    {
        const {name,value} = event.target;
        setFormField({...formField, [name]:value})
    }
    
    return(
        <>
        <h1>SIGN UP WITH YOUR EMAIL AND PASSWORD</h1>
        <form onSubmit={handleSubmit}>
            <label>DISPLAY NAME</label>
            <input type="text" required onChange={handleChange} name='displayName' value={displayName}/>

            <label>EMAIL</label>
            <input type="email" required onChange={handleChange} name='email' value={email}/>

            <label>PASSWORD</label>
            <input type="password" required onChange={handleChange} name='password' value={password}/>

            <label>CONFIRM PASSWORD</label>
            <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

            <button type="submit">SIGN UP</button>
        </form>
        </>
    );
}

export default SignUpForm;
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  googleSignInWithPopup,
  getUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const {email,password} = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({...formField, [name]:value})
  };

  const handleSubmit = () => 
  {
    alert(email,password)
  };

  const logGoogleUser = async () => {
    const { user } = await googleSignInWithPopup();
    const userDocref = getUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"EMAIL"}
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label={"PASSWORD"}
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Button type="submit">SIGN IN</Button>
      </form>
      <Button onClick={logGoogleUser} buttonType={"google"}>
        SIGN IN WITH GOOGLE
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

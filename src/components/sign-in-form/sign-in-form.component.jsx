import "../sign-in-form/sign-in-form.styles.scss";
import Button from "../button/button.component";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signUpUserWithEmailAndPassword,
  getUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const clearFormField = () => {
    setFormField(defaultFormFields);
  };

  const logGoogleUser = async () => {
    const { user } = await googleSignInWithPopup();
    const userDocref = getUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>I Already Have An Account</h2>
      <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"EMAIL"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label={"PASSWORD"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
      <Button buttonType={"google"} onClick={logGoogleUser}>
        SIGN IN WITH GOOGLE
      </Button>
    </div>
  );
};

export default SignInForm;

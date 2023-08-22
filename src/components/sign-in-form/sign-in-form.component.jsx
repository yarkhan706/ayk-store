import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInUserWithEmailAndPassword,
  googleSignInWithPopup,
} from "../../utils/firebase/firebase.utils";
import "../sign-in-form/sign-in-form.styles.scss";

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
    await googleSignInWithPopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      clearFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong-password");
          break;
        case "auth/email-already-in-use":
          alert("EMAIL OR PASSWORD NOT MATCH");
          break;
        case "auth/user-not-found":
          alert("EMAIL DOES NOT EXIST");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-in-container">
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
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType={"google"} onClick={logGoogleUser}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

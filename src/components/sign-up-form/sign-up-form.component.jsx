import "../sign-up-form/sign-up-form.styles.scss";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signUpUserWithEmailAndPassword,
  getUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const clearFormField = () => {
    setFormField(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("PASSWORDS DO NOT MATCHES");
      return;
    }

    try {
      const { user } = await signUpUserWithEmailAndPassword(email, password);
      await getUserDocumentFromAuth(user, { displayName });
      clearFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("EMAIL ALREADY IN USE,\ntry sign in with it");
        clearFormField();
      } else {
        console.log(error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <>
      <h1>SIGN UP WITH YOUR EMAIL AND PASSWORD</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"DISPLAY NAME"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label={"CONFIRM PASSWORD"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">SIGN UP</button>
      </form>
    </>
  );
};

export default SignUpForm;

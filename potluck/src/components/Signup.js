import React, { useEffect, useState } from "react";
import formSchemaSignup from "./Validation/signupFormSchema";
import * as yup from "yup";

const initialSignupValues = {
  username: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialEmailConfirm = {
  confirmEmail: "",
};

const initialPasswordConfirm = {
  confirmPassword: "",
};

const Signup = () => {
  // state
  const [signupValues, setSignupValues] = useState(initialSignupValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [emailConfirm, setEmailConfirm] = useState(initialEmailConfirm);
  const [passwordConfirm, setPasswordConfirm] = useState(
    initialPasswordConfirm
  );

  // validation
  const validate = async (name, value) => {
    try {
      await yup.reach(formSchemaSignup, name).validate(value);
      setEmailConfirm({ ...emailConfirm, [name]: "" });
      setPasswordConfirm({ ...passwordConfirm, [name]: "" });
      setFormErrors({ ...formErrors, [name]: "" });
    } catch (error) {
      setEmailConfirm({ ...emailConfirm, [name]: error.errors[0] });
      setPasswordConfirm({ ...passwordConfirm, [name]: error.errors[0] });
      setFormErrors({ ...formErrors, [name]: error.errors[0] });
    }
  };

  // event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupValues({ ...signupValues, [name]: value });
    validate(name, value);
  };

  useEffect(() => {
    if (signupValues.email === signupValues.confirmEmail) {
      setEmailConfirm(initialEmailConfirm);
    }
    if (signupValues.password === signupValues.confirmPassword) {
      setPasswordConfirm(initialPasswordConfirm);
    }
  }, [
    signupValues.email,
    signupValues.confirmEmail,
    emailConfirm,
    passwordConfirm,
    signupValues.password,
    signupValues.confirmPassword,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="signup-page">
        <h1 className="pageTitle">Login</h1>
        <form id="signup" onSubmit={onSubmit}>
          <div>
            <p>{formErrors.username}</p>
            <p>{formErrors.email}</p>
            <p>{emailConfirm.confirmEmail}</p>
            <p>{formErrors.password}</p>
            <p>{passwordConfirm.confirmPassword}</p>
          </div>
          <label>
            {" "}
            Username:
            <input
              id="signup-username"
              type="text"
              name="username"
              value={signupValues.username}
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            Email:
            <input
              id="signup-email"
              type="email"
              name="email"
              value={signupValues.email}
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            Confirm Email:
            <input
              id="signup-confirm-email"
              type="email"
              name="confirmEmail"
              value={signupValues.confirmEmail}
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            Password:
            <input
              id="signup-password"
              type="password"
              name="password"
              value={signupValues.password}
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            Confirm Password:
            <input
              id="signup-confirm-password"
              type="password"
              name="confirmPassword"
              value={signupValues.confirmPassword}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;

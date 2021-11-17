import React, { useEffect, useState } from "react";
import formSchema from "./Validation/LoginFormSchema";
import * as yup from 'yup';

const initialLoginValues = {
  username: '',
  password: ''
}
const initialFormErrors = {
  username: '',
  password: ''
};

const Login = () => {
  //const { username, password } = props.values;
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value })
    validate(name, value);
    console.log(e.target.name)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    formSchema.isValid(loginValues).then(valid => setDisabled(!valid))
  }, [loginValues])
  return (
  <section>

    <div className='login-page'>
      <h1 className='pageTitle'>Login</h1>
      <form id='login' onSubmit={onSubmit}>
        <div>
          <p>{formErrors.username}</p>
          <p>{formErrors.password}</p>
        </div>
        <label> Username:
          <input 
            id='username-input'
            type='text'
            name='username' 
            value={loginValues.username}
            onChange={handleChange}
          />
        </label>

        <label> Password:
          <input
            id='password-input'
            type='password'
            name='password'
            value={loginValues.password}
            onChange={handleChange}
          />
        </label>

        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  </section>
  );
};

export default Login;

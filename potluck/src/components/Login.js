import React, { useState } from "react";

const initialLoginValues = {
  username: '',
  password: ''
}

const Login = () => {
  //const { username, password } = props.values;
  const [loginValues, setLoginValues] = useState(initialLoginValues)

  const onChange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
  <section>
    <div className='login-page'>
      <h1 className='pageTitle'>Login</h1>
      <form id='login' onSubmit={onSubmit}>
        <label> Username:
          <input 
            id='username-input'
            type='text'
            name='username' 
            value={loginValues.username}
            onChange={onChange}
          />
        </label>

        <label> Password:
          <input
            id='password-input'
            type='password'
            name='password'
            value={loginValues.password}
            onChange={onChange}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  </section>
  );
};

export default Login;

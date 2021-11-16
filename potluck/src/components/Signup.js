import React, { useState } from "react";

const initialSignupValues = {
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  }

const Signup = () => {
  //const { username, password } = props.values;
  const [signupValues, setSignupValues] = useState(initialSignupValues)

  const onChange = (e) => {
    setSignupValues({
      ...signupValues,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
  <section>
    <div className='signup-page'>
      <h1 className='pageTitle'>Login</h1>
      <form id='signup' onSubmit={onSubmit}>
        <label> Username:
          <input 
            id='signup-username'
            type='text'
            name='username' 
            //value={signupValues.username}
            onChange={onChange}
          />
        </label>
        <label> Email:
            <input
                id='signup-email'
                type='email'
                name='email'
                //value={signupValues.email}
                onChange={onChange}
            />
        </label>  
        <label> Confirm Email:
            <input
                id='signup-confirm-email'
                type='email'
                name='confirm-email'
                //value={signupValues.confirmEmail}
                onChange={onChange}
            />
        </label> 
        <label> Password:
          <input
            id='signup-password'
            type='password'
            name='password'
            //value={signupValues.password}
            onChange={onChange}
          />
        </label>
        <label> Confirm Password:
            <input
                id='signup-confirm-password'
                type='password'
                name='confirm-password'
                //value={signupValues.confirmPassword}
                onChange={onChange}
            />
        </label>
        <button>Submit</button>
      </form>
    </div>
  </section>
  );
};

export default Signup;
import React from "react";
import '../'

const initialLoginValues = {
  username: '',
  password: ''
}

const Login = (props) => {
  //const { username, password } = props.values;

  const onChange = (e) => {
    console.log(e);
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
            //value={username}
            onChange={onChange}
          />
        </label>

        <label> Password:
          <input
            id='password-input'
            type='text'
            name='password'
            //value={password}
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

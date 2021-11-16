import React from "react";

const initialLoginValues = {
  username: '',
  password: ''
}

const Login = (props) => {
  const { submit } = props;
  //const { username, password } = props.values;

  const onChange = (e) => {
    console.log(e);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  }

  return (
    <div>
      <h1>Login</h1>
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
      </form>
    </div>
  );
};

export default Login;

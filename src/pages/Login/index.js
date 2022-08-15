import React from 'react';

const Login = () => {
  return (
    <div>
      <div className="register">
        <form className="register-form" action="/">
          <h1>Login</h1>
          <div className="register-input">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />
            <button type="submit" className="registerbtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

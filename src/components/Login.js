import React from 'react';

const Login = () => (
  <div className="login-page">
    <form className="login-form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <p><a href="#">Create Account</a></p>
    </form>
  </div>
);

export default Login;
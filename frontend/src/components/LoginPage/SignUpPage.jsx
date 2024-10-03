import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../../features/auth/authSlice";

import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password }));
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <div className="login-image"></div>
      <div className="login-content">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <p>Forgot password?</p>
          <button type="submit">Sign Up</button>
          <Link to="/login">
            <p className="login-content-text">
              Already have an account? <span>Log In</span>
            </p>
          </Link>
        </form>
        {status === "failed" && <p>{error.error}</p>}
      </div>
    </div>
  );
}

export default LoginPage;

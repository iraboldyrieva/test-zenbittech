import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

import "./Header.css";

function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/">My Logo</Link>
        {user ? (
          <div className="header-right">
            <button className="header-right-login" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="header-right">
            <Link to="/login" className="header-right-login">
              Log In
            </Link>
            <Link to="/signup" className="header-right-signin">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

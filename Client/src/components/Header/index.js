import React from 'react'
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";

const Header = () => {
  return (
    <>
      <div>
            <Link to="/" >
                <p>NEXT-LEVEL</p>
            </Link>
        </div>
        <div>
            <nav>
            <Link to="/login" >
                <p>Login</p>
            </Link>

            <Link to="/signup" >
                <p>Sign Up</p>
            </Link>

            <a href='/' onClick={() => Auth.logout()}>
              Logout
            </a>
            </nav>
        </div>
    </>
  )
};

export default Header;
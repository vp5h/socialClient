import { useContext, useRef, useState } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function Login() {
  // const email = useRef("Janesss@gamil.com");
  const [email, setEmail] = useState('Janesss@gmail.com');
  const [password, setPassword] = useState('123456');
  
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email, password: password }, dispatch);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                value={email}
                required
                className="loginInput"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                required
                minLength="6"
                className="loginInput"
               onChange={(e)=>setPassword(e.target.value)}
              />
              <button
                className="loginButton"
                type="submit"
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  'Log In'
                )}
              </button>
              <span className="loginForgot"></span>
            </form>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                <Link
                  to="/"
                  style={{ textDecoration: 'none' }}
                  className="loginRegisterButton"
                >
                  Create a New Account
                </Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import Overlay from '../components/Overlay';
import Popup from '../components/Popup';
import { googleProvider, facebookProvider, twitterProvider } from '../firebase';
import './LoginPage.css';

const auth = getAuth();

const LoginPage = ({ onUsernameChange }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [popup, setPopup] = useState(false);
  const [errorStatus, setErrorMessage] = useState(false);

  const togglePopup = () => setPopup((prev) => !prev);
  const closePopup = () => {
    setPopup(false);
    setErrorMessage(false);
  };

  const socialSignIn = async (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
      })
      .catch((error) => {
        // Handle errors
      });
  };

  const customSignIn = function async(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-in
      })
      .catch((error) => {
        // Handle errors
        setErrorMessage(error.message);
        setPopup(true);
      });
  };

  const createNewUser = async (e) => {
  // console.log('createNewUser function called');

  try {
    const userCredential = await handleRegistration(e);

    if (userCredential) {
      // Wait for the user's profile to be updated
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          // Log user information after profile update
          console.log('User after profile update:', user);

          // Update state or variable holding the username
          onUsernameChange(user.displayName);

          // Unsubscribe from the listener
          unsubscribe();
        }
      });
    }
  } catch (error) {
    // console.error('Error during registration:', error.message);
    // Handle registration errors
  }
};


  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Wait for the user to be created before updating the profile
      await updateProfile(userCredential.user, {
        displayName: username,
      });
  
      // Log userCredential after registration
      // console.log('User credential after registration:', userCredential);
  
      // Handle successful registration
      return userCredential;
    } catch (error) {
      // console.error('Error during registration:', error.message);
      // Handle errors
      throw error;
    }
  };
  

  return (
    <div>
      {popup && (
        <Popup onPopupHandler={closePopup}>
          {!errorStatus ? (
            <div className="signup-details-container">
              <h1>Sign Up</h1>
              <label>User Name</label>
              <input
                className="signup-details-input"
                type="username"
                value={username}
                placeholder="User Name"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Email</label>
              <input
                className="signup-details-input"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                className="signup-details-input"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="signup-details-button" onClick={createNewUser}>
                Sign Up
              </button>
            </div>
          ) : (
            <div className="signup-message">
              <h1>Error Message</h1>
              {errorStatus}
            </div>
          )}
        </Popup>
      )}
      <div className="login-page">
        <img
          className='logo'
          src={require('../image/Logo2.jpg')}
        ></img>
        <div className="signin-container">
          <h1 className="signin-text">Login to Your Account</h1>
          <p className="signin-text">Login using social networks</p>
          <div className="social-signin-button-container">
            <div className="social-signin-button" onClick={() => socialSignIn(googleProvider)}>
              <GoogleIcon />
            </div>
            <div
              className="social-signin-button"
              style={{ backgroundColor: '#1878f3' }}
              onClick={() => socialSignIn(facebookProvider)}
            >
              <FacebookOutlinedIcon />
            </div>
            <div
              className="social-signin-button"
              style={{ backgroundColor: '#1da1f3' }}
              onClick={() => socialSignIn(twitterProvider)}
            >
              <TwitterIcon />
            </div>
          </div>
          <div className="signin-form">
            <input
              className="signin-input"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="signin-input"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="signin-button" onClick={customSignIn}>
              Sign In
            </button>
          </div>
        </div>
        <div className="signup-container">
          <img
            className="signup-image"
            src="https://images.freeimages.com/clg/istock/previews/9267/92670267-education-and-science-outline-multicolored-vector-illustration-with-open-book.jpg"
            alt="signup"
          ></img>
          <h1 className="signup-text">New Here?</h1>
          <h3 className="signup-text">Sign up and start your lifelong learning!</h3>
          <div className="signup-form">
            <button className="signup-button" onClick={togglePopup}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

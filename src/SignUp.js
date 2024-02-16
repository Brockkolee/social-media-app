// Registration.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Card from './Card'

const auth = getAuth();
const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popup, setPopup] = useState(false)
  
  function popupHandler() {
    setPopup((prev) => !prev) 
}
  const handleRegistration = async (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };
  

  return (
    <div className='signup-container'>
      <img className='signup-image' src='https://images.freeimages.com/clg/istock/previews/9267/92670267-education-and-science-outline-multicolored-vector-illustration-with-open-book.jpg'></img>
      <h1 className='signup-text'>New Here?</h1>
      <h3 className='signup-text'>Sign up and start your life long learning!</h3>
      <div className='signup-form'>
        <button className='signup-button' onClick={popupHandler}>Sign Up</button>
      </div>
    </div>
  );
};

export default Registration;

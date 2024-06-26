import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidata } from"../utils/validate" ;
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => { 
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const handleButtonClick = () => {
    // validate the forn data
    const message = checkValidata (email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return ;

    if(!isSignInForm) {
      // Sign in Logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVATAR,
    })
    .then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }else {
      //Sign up Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

     setErrorMessage(errorCode + "-" + errorMessage);
  });

    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  
  return (
    <div>
      <Header/>
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" alt='logo' src={BG_URL} />
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute w-10/12  md:w-3/12 p-12 my-24 bg-black mx-auto right-0 left-0 rounded-lg bg-opacity-80">
          <h1 className='text-white font-bold text-3xl my-5'>
            {isSignInForm? "Sign In" : "Sing Up"}
          </h1>
          {!isSignInForm && <input type="text" placeholder="Enter Name" className="p-4 my-4 w-full bg-black bg-opacity-10 border text-white"></input>}
          <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-black bg-opacity-10 border text-white"></input>

          <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-black bg-opacity-10 border text-white"></input>
          <p className='text-red-500 '>{errorMessage}</p>
          <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 text-white w-full rounded-lg cursor-pointer">
          {isSignInForm ? "Sign In" : "Sing Up"}
          </button>
          <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Allready registered? Sign in Now."}
          </p>
        </form>
      </div>
    </div>
  ); 
};

export default Login;
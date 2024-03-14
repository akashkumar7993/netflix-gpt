import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidata } from"../utils/validate" ;

const Login = () => { 
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

const email = useRef(null);
const password = useRef(null);

  const handleButtonClick = () => {
    // validate the forn data
    const message = checkValidata (email.current.value, password.current.value);
    setErrorMessage(message);
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img className="object-fit: cover" src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
      </div>
      <div>
        <from onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 my-24 bg-black mx-auto right-0 left-0 rounded-lg bg-opacity-80">
          <h1 className='text-white font-bold text-3xl my-5'>
            {isSignInForm ? "Sign In" : "Sing Up"}
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
        </from>
      </div>
    </div>
  ); 
};

export default Login
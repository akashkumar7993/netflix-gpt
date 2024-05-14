import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { remove } from 'firebase/database';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSingOut = () => {
  signOut(auth)
  .then(() => {})
  .catch((error) => {
  navigate("/error");
});
  };

  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
       // User is signed In
      if (user) {
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
   }, [])
  
   const handleGptSearchClick =() =>{
    dispatch(toggleGptSearchView());
   };

   const handleLanguageChange =(e) =>{
    dispatch(changeLanguage(e.target.value));
   }

  return (
    <div className='absolute w-screen px-10 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40 '
      src= {LOGO}
      alt='logo'
      />
      {user && (<div className='flex p-2'>
        {showGptSearch && (<select 
        className='p-2 m-4 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) =>
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
            </option>
          )}
        </select>)}
      <button className='py-2 px-4 m-4 bg-purple-800 text-white rounded-md'
      onClick={handleGptSearchClick}
      >
        {showGptSearch? "Hompage":"GPT Search"}
        </button>
        <img className='w-10 h-10 rounded-lg' alt='usericon' 
        src={user?.photoURL}
        />
        < button onClick={handleSingOut} className='font-bold'>(Sing Out)</button>
      </div>)}
    </div>
  ); 
};

export default Header ;
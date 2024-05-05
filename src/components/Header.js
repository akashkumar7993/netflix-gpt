import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { remove } from 'firebase/database';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSingOut = () => {
  signOut(auth)
  .then(() => {})
  .catch((error) => {
  navigate("/error");
});
  };

  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
       // User is signed In
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    
   }, [])
  

  return (
    <div className='absolute w-screen px-10 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40 '
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt='logo'
      />
      {user && (<div className='flex p-2'>
        <img className='w-10 h-10 rounded-lg' alt='usericon' 
        src={user?.photoURL}
        />
        <button onClick={handleSingOut} className='font-bold'>(Sing Out)</button>
      </div>)}
    </div>
  ); 
};

export default Header ;
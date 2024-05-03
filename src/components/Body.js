import React from 'react'
import Login from "./Login";
import Browse from './Browse';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { remove } from 'firebase/database';

const Body = () => {

const dispatch = useDispatch();

 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/browse",
        element: <Browse/>,
    },
 ]);


 useEffect (() => {
  onAuthStateChanged(auth, (user) => {
     // User is signed In
    if (user) {
      const {uid, email, displayName} = user;
      dispatch(addUser({uid:uid, email:email, displayName:displayName}));
    } else {
      // User is signed out
      dispatch(removeUser());
    }
  });
  
 }, [])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body
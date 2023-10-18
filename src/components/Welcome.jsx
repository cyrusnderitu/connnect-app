import React, { useState } from "react";
import Logo from "../assets/comments.png";
// import {FcGoogle} from 'react-icons/fc'
import { auth } from "../firebase";
import Login from "../components/Login";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Register from "./Register";
// import {useAuthState} from 'react-firebase-hooks/auth'

const Welcome = () => {
  const [account, setAccount] = useState(true);

  const changeState = () => {
    setAccount(!account);
  };
  const SignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="flex justify-center items-center h-full">
      <div className="w-[30%]">
        <div className="logo flex items-center gap-2 justify-center mb-8">
          <img src={Logo} alt="" className="h-[50px]" />
          <h1 className="font-bold text-2xl text-gray-300">Connect</h1>
        </div>
        {account ? (
          <Login changeAcc={changeState} SignIn={SignIn} />
        ) : (
          <Register changeAcc={changeState} />
        )}
      </div>
    </main>
  );
};
export default Welcome;

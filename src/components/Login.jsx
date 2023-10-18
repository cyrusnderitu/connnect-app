import React, {useState} from "react";
import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword} from 'firebase/auth'

const Login = ({ changeAcc, SignIn }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [user] = useAuthState(auth)
  const provider = new GoogleAuthProvider();
  
  const handleSubmit = (event) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });
    setEmail("")
    setPassword("")
  }

  if(user){
    console.log(user)
  }
  const GoogleSignIn = ()=>{
    signInWithRedirect(auth, provider)
  }
  return (
    <div className="">
      <div className="cont">
        <h4 className="text-gray-300 text-center font-semibold text-xl">
          Sign In
        </h4>
        <p className="text-gray-700 text-center mb-4 text-md">
          Sign in with connect to continue
        </p>
        <form className="text-gray-500 bg-[#8A9A5B] shadow-2xl p-8 w-full text-[16px] grid gap-6 mb-8" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="Email">Username</label>
            <div className="flex items-center gap-2 bg-[#636f3f] p-2 rounded-md border-[1px] border-gray-400">
              <RxAvatar className="text-gray-300 w-[10%] border-r-2 border-r-gray-400" />
              <input
                type="email"
                id="Email"
                value={email}
                placeholder="Enter Username/Email"
                className="w-full indent-2 bg-transparent outline-none text-white"
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
            </div>
          </div>
          <div className="grid">
            <label htmlFor="pass">Password</label>
            <div className="flex items-center bg-[#636f3f] p-2 rounded-md border-[1px] border-gray-400">
              <RiLockPasswordFill className="fill-gray-300 w-[10%] border-r-2 border-r-gray-400" />
              <input
                type="password"
                name=""
                id="pass"
                value={password}
                className="w-full indent-2 bg-transparent outline-none"
                onChange={(e)=>{setPassword(e.target.value)}}
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <a href="#new" className="hover:underline hover:underline-offset-2">
              Forgot Password ?
            </a>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" className="outline-none" />
              <span> Remember Me</span>
            </div>
          </div>
          <button className="font-semibold text-gray-300 bg-blue-600 py-2 rounded-md" type="submit">
            Sign In
          </button>

          <div>
            <p className="text-center relative mb-2 before:absolute after:absolute before:w-[30%] after:w-[30%] before:h-[1px] after:h-[1px] before:content-[''] after:content-[''] before:bg-white after:bg-white before:left-0 after:right-0 before:bottom-0 after:bottom-0 before:top-0 after:top-0 before:my-auto after:my-auto">
              Or Sign In with
            </p>
            <div className="grid">
              <a href="#new" className="bg-slate-400 rounded-md py-2 flex items-center justify-center hover:cursor-pointer" onClick={GoogleSignIn}>
                <FcGoogle />
                oogle
              </a>
            </div>
          </div>
        </form>

        <p className="text-center">
          Don't have an Acount ?{" "}
          <span
            className="text-green-500 hover:cursor-pointer"
            onClick={() => {
              changeAcc();
            }}
          >
            Signup now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

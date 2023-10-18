import { useContext, useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/comments.png";
import { RxAvatar } from "react-icons/rx";
import { BsChatSquareDotsFill } from "react-icons/bs";
import {BiGroup} from 'react-icons/bi'
import {AiFillSetting, AiOutlinePoweroff} from 'react-icons/ai'
import {TiContacts} from 'react-icons/ti'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import {ImProfile} from "react-icons/im"
import { UserContext } from "../userContext";

const NavBar = ({active, handleChange}) => {

  const user = useContext(UserContext)
  const [theme, setTheme] = useState(true)
  const [show, setShow] = useState(false)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <nav className="flex justify-between flex-col items-center h-full w-[70px] bg-slate-500 text-white py-8">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="" className="w-[30px] mb-8" />
        <div className="nav_menu flex flex-col items-center gap-8">
          <a className={`${active == "profile" ? 'active': ''} hover:cursor-pointer`} onClick={()=>{handleChange("profile")}}><RxAvatar  className="text-3xl"/></a>
          <a className={`${active == "chats" ? 'active': ''} hover:cursor-pointer`} onClick={()=>{handleChange("chats")}}><BsChatSquareDotsFill  className="text-3xl"/></a>
          <a className={`${active == "contacts" ? 'active': ''} hover:cursor-pointer`} onClick={()=>{handleChange("contacts")}}><TiContacts  className="text-3xl"/></a>
          <a className={`${active == "groups" ? 'active': ''} hover:cursor-pointer`} onClick={()=>{handleChange("groups")}}><BiGroup  className="text-3xl"/></a>
          <a className={`${active == "settings" ? 'active': ''} hover:cursor-pointer`} onClick={()=>{handleChange("settings")}}><AiFillSetting  className="text-3xl"/></a>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-6">
        <a>{theme? (<BsFillSunFill className="text-3xl hover:cursor-pointer"/>): (<BsFillMoonFill className="text-3xl hover:cursor-pointer"/>)}</a>
        <a className="relative">
          <img src={user.photoURL} alt="nav-img" className="h-[35px] rounded-[50%] hover:cursor-pointer" onClick={()=>{setShow(!show)}}/>
          {show && <div className="absolute left-12 bottom-0 p-2 bg-slate-600 w-[100px] grid gap-2 rounded-r-2xl rounded-tl-2xl">
            <a className="flex items-center gap-1 hover:cursor-pointer">
              <ImProfile />
              Profile
            </a>
            <a className="flex items-center gap-1 hover:cursor-pointer" onClick={()=>{auth.signOut()}}>
              <AiOutlinePoweroff />
              Log Out
            </a>
          </div>}
        </a>
      </div>
    </nav>
  );
};
export default NavBar;

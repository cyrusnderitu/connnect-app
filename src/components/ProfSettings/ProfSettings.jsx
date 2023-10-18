import React, { useState, useContext } from "react";
import { BiDotsVerticalRounded, BiDownArrow } from "react-icons/bi";
import { UserContext } from "../../userContext";

const ProfSettings = () => {

  const [active, setActive] = useState(null)
  const [current, setCurrent] = useState(false)
  const [change, setChange] = useState(false)
  const [toggle, setToggle] = useState(false)

  const user = useContext(UserContext);

  return (
    <div>
      <div className="cont">
        <div className="relative h-[150px] bg-prof w-[calc(100% + 4rem)] -ml-8 -mr-8 -mt-8">
          <div className="px-8 py-4 flex justify-between items-center text-white">
            <h2 className="text-2xl">Settings</h2>
            <BiDotsVerticalRounded className="font-semibold text-xl cursor-pointer" />
          </div>
          <img
            src={user.photoURL}
            alt="prof-image"
            className="rounded-[50%] w-14 absolute -bottom-8 left-0 right-0 mx-auto"
          />
        </div>
        <div className="settData mt-32 grid gap-4">
          <div className="border-[1px] border-gray-500 rounded-md overflow-hidden">
            <div className="header hover:cursor-pointer" onClick={()=>{setActive("about"); if(active == "about"){setCurrent(!current)}}}>
              <h1 className="flex justify-between items-center text-gray-500 bg-[#363F1E] border-[1px] border-gray-400 rounded-md px-4 py-2 font-semibold">
                Personal Info
                <BiDownArrow className={`${active == "about" && current ? "rotate-180": ''} cursor-pointer`}/>
              </h1>
            </div>
            <div className={`${active == "about" && current ? "p-2": 'h-0'} grid gap-2`}>
              <div>
                <h2 className="text-white font-semibold">Name</h2>
                <p >{user.displayName}</p>
              </div>
              <div>
                <h2 className="text-white font-semibold">Email</h2>
                <p>{user.email}</p>
              </div>
              <div>
                <h2 className="text-white font-semibold">Location</h2>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-gray-500 rounded-md overflow-hidden">
            <div className="header hover:cursor-pointer" onClick={()=>{setActive("privacy"); if(active == "privacy"){setCurrent(!current)}}}>
              <h1 className="flex justify-between items-center text-gray-500 bg-[#363F1E] border-[1px] border-gray-400 rounded-md px-4 py-2 font-semibold">
                Privacy
                <BiDownArrow className={`${active == "privacy" && current ? "rotate-180": ''} cursor-pointer`}/>
              </h1>
            </div>
            <div className={`${active == "privacy" && current ? "p-2": 'h-0'}`}>
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold">Profile Photo</p>
                  <select name="" id="" className="bg-slate-500 outline-none rounded-md text-sm hover:cursor-pointer p-1">
                    <option value="everyone">Everyone</option>
                    <option value="contacts">Contacts</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-white">Last Seen</p>
                  <div className={` ${change ? "justify-end": "justify-start"} w-[40px] h-[20px] bg-sky-500 rounded-[20px] p-1 flex items-center hover:cursor-pointer`} onClick={()=>{setChange(!change)}}>
                    <div className="w-[12px] h-[12px] bg-white rounded-[50%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold">Status</p>
                  <select name="" id="" className="bg-slate-500 outline-none rounded-md text-sm hover:cursor-pointer p-1">
                    <option value="everyone">Everyone</option>
                    <option value="contacts">Contacts</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-white">Read receipts</p>
                  <div className={` ${toggle ? "justify-end": "justify-start"} w-[40px] h-[20px] bg-sky-500 rounded-[20px] p-1 flex items-center hover:cursor-pointer`} onClick={()=>{setToggle(!toggle)}}>
                    <div className="w-[12px] h-[12px] bg-white rounded-[50%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold">Groups</p>
                  <select name="" id="" className="bg-slate-500 outline-none rounded-md text-sm hover:cursor-pointer p-1">
                    <option value="everyone">Everyone</option>
                    <option value="contacts">Contacts</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-gray-500 rounded-md overflow-hidden">
            <div className="header hover:cursor-pointer" onClick={()=>{setActive("help"); if(active == "help"){setCurrent(!current)}}}>
              <h1 className="flex justify-between items-center text-gray-500 bg-[#363F1E] border-[1px] border-gray-400 rounded-md px-4 py-2 font-semibold">
                Help
                <BiDownArrow className={`${active == "help" && current ? "rotate-180": ''} cursor-pointer`}/>
              </h1>
            </div>
            <div className={`${active == "help" && current ? "p-2": 'h-0'}`}>
              <div className="cont grid gap-2">
                <p className="font-semibold text-white py-4 cursor-pointer">FAQ's</p>
                <p className="font-semibold text-white py-4 cursor-pointer border-t-2 border-gray-500 border-b-2">Contacts</p>
                <p className="font-semibold text-white py-4 cursor-pointer">Terms & Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfSettings;

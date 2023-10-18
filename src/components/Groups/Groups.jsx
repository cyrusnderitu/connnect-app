import React, {useContext} from 'react'
import {BsSearch, BsPlus} from 'react-icons/bs'
import { UserContext } from "../../userContext";

const Groups = () => {

  const user = useContext(UserContext);

  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-3xl text-white font-semibold'>Groups</h1>
        <BsPlus className='text-2xl text-white'/>
      </div>

      <div className="flex items-center w-full border-none bg-gray-600 rounded-md p-2">
          <BsSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for groups"
            className="border-none outline-none w-full text-gray-400 bg-transparent indent-4"
          />
      </div>

      <div className="cont gap-4 flex flex-col justify-between mt-12">
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <span className="h-[40px] w-[40px] flex items-center justify-center bg-[#09370c] rounded-[50%] text-2xl text-slate-200 font-bold">#</span>
                  <div>
                    <h1 className="text-xl text-white font-semibold">React JS</h1>
                    <p className="text-gray-400">Okay sure</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <span className="h-[40px] w-[40px] flex items-center justify-center bg-[#09370c] rounded-[50%] text-2xl text-slate-200 font-bold">#</span>
                  <div>
                    <h1 className="text-xl text-white font-semibold">Natujenge Program</h1>
                    <p className="text-gray-400">Okay sure</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <span className="h-[40px] w-[40px] flex items-center justify-center bg-[#09370c] rounded-[50%] text-2xl text-slate-200 font-bold">#</span>
                  <div>
                    <h1 className="text-xl text-white font-semibold">MLSA Community</h1>
                    <p className="text-gray-400">Hello world</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <span className="h-[40px] w-[40px] flex items-center justify-center bg-[#09370c] rounded-[50%] text-2xl text-slate-200 font-bold">#</span>
                  <div>
                    <h1 className="text-xl text-white font-semibold">Women in Tech Nairobi</h1>
                    <p className="text-gray-400"></p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                <span className="h-[40px] w-[40px] flex items-center justify-center bg-[#09370c] rounded-[50%] text-2xl text-slate-200 font-bold">#</span>
                  <div>
                    <h1 className="text-xl text-white font-semibold">App Developers</h1>
                    <p className="text-gray-400"></p>
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default Groups

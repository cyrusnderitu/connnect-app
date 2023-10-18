import React, {useContext} from "react";
import {RxAvatar} from 'react-icons/rx'
import {AiOutlineMail} from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import { UserContext } from "../../userContext";

const Profile = () => {
  
  const user = useContext(UserContext);
  return (
    <div>
      <div className="relative h-[150px] bg-prof w-[calc(100% + 4rem)] -ml-8 -mr-8 -mt-8 mb-12">
        <div className="px-8 py-4 flex justify-between items-center text-white">
          <h2 className="text-2xl">My profile</h2>

          <BiDotsVerticalRounded className="font-semibold text-xl"/>
        </div>
        <img
          src={user.photoURL}
          alt=""
          className="rounded-[50%] w-14 absolute -bottom-8 left-0 right-0 mx-auto"
        />
      </div>

      <div className="content grid text-gray-400">
        <div className="mb-10">
          <h4 className="font-semibold text-xl mb-2">{user.displayName}</h4>
          {user.title ? `${user.title}`: "No Title"}
        </div>
        <p className="text-left mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
          necessitatibus a assumenda facilis modi sed.
        </p>

        <div>
          <p className="flex items-center gap-1">
            <RxAvatar />
            {user.displayName}
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineMail />
            {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

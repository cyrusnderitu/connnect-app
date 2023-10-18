import React from "react";
import {RxAvatar} from 'react-icons/rx'

const Chat = ({user}) => {
  const f = Intl.DateTimeFormat("en-us", {
    dateStyle: "short",
  });

  return (
    <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
        <div className="flex items-center gap-x-2">
            <div className="">
            {user.photoURL ? (
                <img
                src={user.photoURL}
                alt=""
                className="bg-contain bg-center h-[30px] bg-white rounded-[50%]"
                />
            ) : (
                <RxAvatar className="text-4xl text-white" />
            )}
            </div>
            <div>
                <h1 className="text-md text-white font-semibold">
                    {user.displayName}
                </h1>
                <p className="text-gray-400 text-sm">Okay sure</p>
            </div>
        </div>
        <span>{f.format()}</span>
    </div>

  );
};

export default Chat;

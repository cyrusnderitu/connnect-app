import React, {useContext} from "react";
import { FcVideoCall, FcCallback } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase";
import { UserContext } from "../../userContext";

const TimeLine = () => {
  const [chats, setChats] = useState([]);

  const user = useContext(UserContext);
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let chats = [];
      QuerySnapshot.forEach((doc) => {
        chats.push({ ...doc.data()});
      });
      setChats(chats);
    });
    return () => unsubscribe;
  }, []);
  return (
    <div className="w-[80%] bg-text relative overflow-y-scroll timeline">
      <div className="h-[4rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 sticky top-0 z-20">
        <div className="flex justify-between items-center">
          <img src={user.photoURL} alt="" className="h-[35px] rounded-[50%]" />
          <div className="flex items-center gap-4">
            <FcVideoCall className="text-2xl hover:cursor-pointer" />
            <FcCallback className="text-2xl hover:cursor-pointer" />
            <BiDotsVerticalRounded className="text-2xl text-white hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="text px-4 py-8 flex flex-col gap-y-12 items-end">
          {chats?.map((chat) => (
            <Messages key={chat.id} text={chat.text} time={chat.createdAt} />
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 w-[calc(100%-500px)]">
        <Input />
      </div>
    </div>
  );
};

export default TimeLine;

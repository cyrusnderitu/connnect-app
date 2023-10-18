import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { auth, db } from "../../firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const Input = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: Timestamp.fromDate(new Date()),
      uid,
    });
    setMessage("")
  };
   return (
    <div className="w-full">
      <div className="cont bg-slate-200 h-14 p-4 rounded-t-xl">
        <form className="flex items-center justify-between" onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            placeholder="Type something ..."
            className=" indent-8 w-[calc(100%-100px)] bg-transparent outline-none text-gray-800 h-fit"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="">
            <button className="flex gap-2 border-none text-sm bg-sky-400 text-white p-2 rounded-lg items-center hover:cursor-pointer">
              Send <AiOutlineArrowRight className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;

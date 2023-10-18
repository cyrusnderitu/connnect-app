import React, { useState, useContext } from 'react'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { db } from "../../firebase";
import { collection, query, where, getDocs, updateDoc, serverTimestamp } from "firebase/firestore";
import { UserContext } from '../../userContext';

const Contacts = () => {
  const logger = useContext(UserContext)

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const combinedID = logger.uid > user.uid ? logger.uid + user.uid : user.uid + logger.uid;

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));

    try {
      const docSnap = await getDocs(q);
      docSnap.forEach((doc) => {
        setUser(doc.data());
      })
    } catch (error) {
      setErr(true);
    }
  };
  const updateContacts = ()=>{
    try {
      updateDoc(db, "usersChats", logger.uid,{
        [combinedID+"userInfo"]: {
          "user": user.displayName,
          "email": user.email,
          "uid": user.uid
        },
        [combinedID+"date"]: serverTimestamp(),
      }).then(
        updateDoc(db, "usersChats", user.uid,{
        [combinedID+"userInfo"]: {
          "user": logger.displayName,
          "email": logger.email,
          "uid": logger.uid
        },
        [combinedID+"date"]: serverTimestamp(),
      })).then(setUser(null))
    } catch (error) {
      console.log(error) 
    }
  }
  return (
    <div>
      <div className="cont">
        <div className='grid gap-y-8'>
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-bold text-2xl text-white ">Contacts</h1>
            <BsPlus className="text-white text-3xl hover:cursor-pointer p-[2px] rounded-sm hover:bg-lime-400"/>
          </div>
          <div className='grid gap-y-8'>
            <div className="flex items-center w-full border-none bg-gray-600 rounded-md p-2">
              <BsSearch className="text-xl" />
              <input
                type="text"
                value={username}
                placeholder="Search users"
                className="border-none outline-none w-full text-gray-400 bg-transparent indent-4"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                onKeyDown={handleSearch}
              />
            </div>
            <div className="cont gap-4 flex flex-col justify-between">
              {err && <span>There user was not found</span>}
              {user && (
                <div className="flex justify-between items-center hover:bg-slate-600 p-4 rounded-lg mr-6 hover:cursor-pointer">
                  <div className="flex items-center gap-x-2">
                    <img
                      src={user.photoURL}
                      alt=""
                      className="h-[30px] bg-white rounded-[50%]"
                    />
                    <div>
                      <h1 className="text-xl text-white font-semibold">
                        {user.displayName}
                      </h1>
                      <p className="text-gray-400">Okay sure</p>
                    </div>
                  </div>
                  <button className='bg-white color-black p-2 rounded-sm text-sm font-semibold hover:bg-blue-600 hover:text-white' onClick={updateContacts}>Add</button>
                </div>
              )}
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts

import React, { useEffect, useState, useContext} from "react";
import {BsPlus} from 'react-icons/bs'
import Search from "../Search";
import {db} from '../../firebase'
import Chat from "../chat/Chat";
import {UserContext} from "../../userContext"
import { collection, query, where, getDocs } from "firebase/firestore";

const Chats = () => {
  const [users, setUsers] = useState([])
  const prof = useContext(UserContext)
  const q = query(collection(db, "users"), where("displayName", "!=", prof.displayName));
  
  useEffect(()=>{
    const getData = async()=>{
      const querySnapshot = await getDocs(q);
      let chats = []
      querySnapshot.forEach((doc) => {
        if(doc.exists()){
          chats.push({ ...doc.data()});
        }
        else{
          console.log("Trouble with fetching the data")
        }
      })
      setUsers(chats);
    }
    return (()=>{
      getData()
    })
  }, [])
  return (
    <div className="h-full">
      <div className="cont h-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-bold text-2xl text-white ">Chats</h1>
          <BsPlus className="text-white text-3xl hover:cursor-pointer p-[2px] rounded-sm hover:bg-lime-400"/>
        </div>
        <Search />
        <div className="h-full">
          <h1 className="text-2xl text-white my-8">Messages</h1>
          <div className="overflow-y-scroll h-[calc(100%-200px)] w-[calc(100%+32px)] -mr-8 chats">
            <div className="cont gap-4 flex flex-col justify-between">
              {users?.map((user) =>{
                return (<Chat key={user.uid} user={user}/>)
              })}
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
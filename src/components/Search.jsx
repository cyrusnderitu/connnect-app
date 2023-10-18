import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const f = Intl.DateTimeFormat("en-us", {
    dateStyle: "short",
  });

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
    setUser("");
    setUsername("");
  };
  return (
    <div>
      <div className="flex items-center w-full border-none bg-gray-600 rounded-md p-2">
        <BsSearch className="text-xl" />
        <input
          type="text"
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
          <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
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
            <span>{f.format()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

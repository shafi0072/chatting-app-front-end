import React from "react";
import { userContext } from "../../Storage/ContextApi";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "@/src/config/baseUrl";
const RequestedFriend = () => {
  const { user } = useContext(userContext);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/auth/yourFollowers`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ idArray: user?.followers }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFollowers(data?.followers);
      })
      .catch((err) => console.log(err));
  }, [user]);

  // handle confirm friend request 
  const handleConfirm = (friendId:any) =>{
    fetch(`${baseUrl}/auth/addFriend`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({userId:user?._id,friendId:friendId,action:"add"})
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }

  return (
    <div>
      {followers?.map((follower, index) => (
        <div key={index} className="flex gap-2 items-center my-3">
          <img className="w-16 rounded-full"
            src={
              follower?.image
                ? follower?.image
                : "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
            }
            alt=""
          />
          <div>
            <h1 className="text-xl font-semibold">{follower?.fullName}</h1>
            <div className="flex gap-2 mt-2">
              <button onClick={()=>handleConfirm(follower?._id)} className="px-3 py-1 rounded text-white bg-blue-500">
                Confirm
              </button>
              <button className="px-3 py-1 rounded bg-gray-400">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestedFriend;

import React from "react";

const ChatFriend = ({ friends }: any) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-4 mb-2">Chats</h2>
      <input type="text" placeholder="Search" className="bg-transparent mb-6 border border-gray-500 py-1 rounded ps-2" />
      <div>
        {friends?.map((friend:any, index:any) => (
          <div key={index} className="flex items-center gap-3 my-3 cursor-pointer">
            <img
              className="w-10 rounded-full"
              src={
                friend?.image
                  ? friend?.image
                  : "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
              }
              alt=""
            />
            <h2 className="text-xl font-semibold">{friend?.fullName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatFriend;

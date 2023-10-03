import React from "react";
import ChatFriend from "./ChatFriend";
import { useEffect, useContext, useState } from "react";
import { baseUrl } from "@/src/config/baseUrl";
import { userContext } from "../../Storage/ContextApi";
import { cpSync } from "fs";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { user } = useContext(userContext);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/auth/yourFollowers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idArray: user?.friendList }),
    })
      .then((res) => res.json())
      .then((data) => setFriends(data?.followers))
      .catch((err) => console.log(err));
  }, [user]);
  return (
    <div className="flex ">
      <div className="w-[15%] border-r border-gray-500 h-[100vh]">
        <ChatFriend friends={friends} />
      </div>
      <div className="w-[85%] px-12">
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;

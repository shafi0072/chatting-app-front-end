import React from "react";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatText from "./ChatText";
import ChatInput from "./ChatInput";

const ChatBox = () => {
  return (
    <div className="h-[95vh] bg-gray-900 relative">
      <div className="flex justify-between items-center mt-6  px-4 py-2 rounded-lg shadow-lg">
        <div className="flex gap-2 items-center">
          <img
            className="w-10 rounded-full"
            src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
            alt=""
          />
          <h2 className="text-xl font-semibold">Manik Sarker</h2>
        </div>
        <div className="flex gap-3 items-center">
          <CallIcon />
          <VideocamIcon />
        </div>
      </div>
      <div className="mt-6">
        <ChatText />
      </div>
      <div>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatBox;

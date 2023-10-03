import React from "react";
import RequestedFriend from "./RequestedFriend";

const Friends = () => {
  return (
    <div className="flex ">
      <div className="border-r border-gray-500 w-[20%] h-[100vh]">
        <h3 className="text-xl font-semibold border-b py-2">Friend Requests</h3>
            <RequestedFriend/>
      </div>
      <div className="w-[80%]">second</div>
    </div>
  );
};

export default Friends;

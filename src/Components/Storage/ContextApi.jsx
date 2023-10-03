import React, { createContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { baseUrl } from "@/src/config/baseUrl";

export const userContext = createContext();

const ContextApi = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const decodedToken = decodeAccessToken(accessToken);
    fetch(`${baseUrl}/auth/myProfile/${decodedToken?.userId}`)
    .then(res=>res.json())
    .then(data=>setUser(data))
    .catch(err=>console.log(err))
  }, []);

  function decodeAccessToken(accessToken) {
    try {
      // Replace 'YOUR_SECRET_KEY' with your actual secret key
      const decoded = jwt.decode(accessToken, "YOUR_SECRET_KEY");
      return decoded;
    } catch (error) {
      console.error("Error decoding access token:", error);
      return null;
    }
  }

  const value = {
    user,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default ContextApi;

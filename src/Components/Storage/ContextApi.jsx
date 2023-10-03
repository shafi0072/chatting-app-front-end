import React, { createContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";

export const userContext = createContext();

const ContextApi = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const decodedToken = decodeAccessToken(accessToken);
    setUser(decodedToken);
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

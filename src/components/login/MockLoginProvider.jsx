import React, { createContext, useContext, useState } from "react";

const MockLoginContext = createContext();

export const MockLoginProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const mockLoginFunction = ({ children }) => {
    if (username === "Iorganize" && password === "Iorganizetest") {
      const mockUserId = "organize-uuid-222333";
      setUserId(mockUserId);
      console.log("Mock login successful. User ID:", mockUserId);
    } else {
      console.log("Mock login failed: Invalid username or password");
    }
  };

  return (
    <MockLoginContext.Provider
      value={{ userId, loginFunction: mockLoginFunction }}>
      {children}
    </MockLoginContext.Provider>
  );
};

export const useMockLogin = () => {
  return useContext(MockLoginContext);
};

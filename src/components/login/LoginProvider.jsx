import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const loginFunction = async (username, password) => {
    try {
      const response = await fetch("https://your-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();

      if (response.ok) {
        setUserId(result.userId);
        console.log("Login successful, User ID:", result.userId);
      } else {
        console.error("Login failed:", result.message);
      }
    } catch (error) {
      console.error("An error occurred during Login:", error);
    }
  };

  return (
    <LoginContext.Provider value={{ userId, loginFunction }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};

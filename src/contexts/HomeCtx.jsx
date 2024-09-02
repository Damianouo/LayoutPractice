/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const HomeCtx = createContext(null);

const HomeCtxProvider = ({ children }) => {
  const [feed, setFeed] = useState("For you");
  return (
    <HomeCtx.Provider value={{ feed, setFeed }}>{children}</HomeCtx.Provider>
  );
};

export default HomeCtxProvider;

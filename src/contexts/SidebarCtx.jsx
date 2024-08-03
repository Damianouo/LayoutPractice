/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SidebarCtx = createContext(null);

const SidebarCtxProvider = ({ children }) => {
  const [sidebarShow, setSidebarShow] = useState(false);
  return (
    <SidebarCtx.Provider value={{ sidebarShow, setSidebarShow }}>
      {children}
    </SidebarCtx.Provider>
  );
};

export default SidebarCtxProvider;

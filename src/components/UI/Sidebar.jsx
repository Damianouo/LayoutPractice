/* eslint-disable react/prop-types */

import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { useContext } from "react";
import { SidebarCtx } from "../../contexts/SidebarCtx";
import Backdrop from "./Backdrop";
const Sidebar = ({ children, className, keyStr }) => {
  const { sidebarShow, setSidebarShow } = useContext(SidebarCtx);

  return (
    <Backdrop
      state={sidebarShow}
      onClick={() => {
        setSidebarShow(false);
      }}
      keyStr={keyStr}
    >
      <motion.aside
        className={cn(
          "fixed right-0 top-0 z-50 h-screen bg-neutral-900 text-inherit",
          className,
        )}
        key={`${keyStr}${sidebarShow}sidebar`}
        initial={{ opacity: 0, right: -100 }}
        animate={{ opacity: 1, right: 0 }}
        exit={{ opacity: 0, right: -100 }}
      >
        {children}
      </motion.aside>
    </Backdrop>
  );
};

export default Sidebar;

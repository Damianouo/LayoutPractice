import Sidebar from "../UI/Sidebar";
import FistSvg from "../../svgs/FistSvg";
import XmarkSvg from "../../svgs/XmarkSvg";
import Button from "../UI/Button";
import { useContext } from "react";
import { SidebarCtx } from "../../contexts/SidebarCtx";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";

const NavSidebar = () => {
  const { setSidebarShow } = useContext(SidebarCtx);
  function handleClose() {
    setSidebarShow(false);
  }
  return (
    <Sidebar keyStr="NavSidebar">
      <div className="flex w-screen flex-col gap-4 px-4 font-semibold sm:w-[400px]">
        {/* icon, close button */}
        <div className="flex justify-between py-8">
          <FistSvg className="h-10 w-10" />
          <Button onClick={handleClose}>
            <XmarkSvg />
          </Button>
        </div>
        <NavLinks onClick={handleClose} className="flex flex-col gap-4" />
        {/* login button */}
        <LoginButton onClick={handleClose} className="mt-8" />
      </div>
    </Sidebar>
  );
};

export default NavSidebar;

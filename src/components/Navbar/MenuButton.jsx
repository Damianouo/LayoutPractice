import Button from "../UI/Button";
import HamburgerSvg from "../../svgs/HamburgerSvg";
import { useContext } from "react";
import { SidebarCtx } from "../../contexts/SidebarCtx";

const MenuButton = () => {
  const { setSidebarShow } = useContext(SidebarCtx);

  return (
    <Button className="lg:hidden" onClick={() => setSidebarShow(true)}>
      <HamburgerSvg />
    </Button>
  );
};

export default MenuButton;

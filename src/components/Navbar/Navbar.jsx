import NavSidebar from "./NavSidebar";
import SidebarCtxProvider from "../../contexts/SidebarCtx";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import LoginModal from "./LoginModal";
import ModalCtxProvider from "../../contexts/ModalCtx";
import MenuButton from "./MenuButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-4 bg-neutral-900 px-8 py-4 font-medium">
      {/* nav links */}
      <div className="flex gap-4">
        <div className="content-center text-lg font-bold leading-none">
          <p>RIOT</p>
          <p>GAMES</p>
        </div>
        <NavLinks className="hidden items-center lg:flex" />
      </div>
      <ModalCtxProvider>
        {/* menu button */}
        <SidebarCtxProvider>
          <MenuButton />
          <NavSidebar />
        </SidebarCtxProvider>
        {/* login button */}
        <LoginButton className="hidden lg:block" />
        <LoginModal />
      </ModalCtxProvider>
    </nav>
  );
};

export default Navbar;

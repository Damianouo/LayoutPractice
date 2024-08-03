import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-swamp-950 grid min-h-screen grid-rows-[auto,1fr] font-mont font-normal text-white">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Root = () => {
  return (
    <div className="font-mont grid min-h-screen grid-rows-[auto,1fr] bg-zinc-950 font-medium text-white">
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

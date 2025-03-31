import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import NowPlayingBar from "./Header/NowPlayingBar";
const Root = () => {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[auto,1fr,auto] bg-zinc-900 font-monts font-medium text-white">
      <header className=""></header>
      <main className="relative overflow-hidden">
        <Outlet />
      </main>
      <footer className="bg-zinc-900/80 backdrop-blur-sm backdrop-grayscale-[50%]">
        <NowPlayingBar />
        <Navbar />
      </footer>
    </div>
  );
};

export default Root;

/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import Button from "../UI/Button";
import { HomeCtx } from "../../contexts/HomeCtx";

const Header = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-items-center px-4 py-2">
        <div className="flex h-8 w-8 items-center justify-center justify-self-start rounded-full bg-slate-400 font-extrabold text-slate-700">
          U
        </div>
        <span className="text-3xl">X</span>
        <button className="text-sm font-semibold text-sky-500">
          Get Premium
        </button>
      </div>
      <HeaderBtns />
    </div>
  );
};

export default Header;

const HeaderBtns = () => {
  const { feed, setFeed } = useContext(HomeCtx);
  const forYouRef = useRef(null);
  const followingRef = useRef(null);
  const divRef = useRef(null);
  useEffect(() => {
    function updateDivStyle() {
      let rect;
      if (feed === "For you") {
        rect = forYouRef.current.children[0].getBoundingClientRect();
      }
      if (feed === "Following") {
        rect = followingRef.current.children[0].getBoundingClientRect();
      }

      divRef.current.style.width = `${rect.width}px`;
      divRef.current.style.left = `${rect.left}px`;
    }
    updateDivStyle();
    window.addEventListener("resize", updateDivStyle);
    return () => {
      window.removeEventListener("resize", updateDivStyle);
    };
  }, [feed]);
  return (
    <div className="relative flex border-b border-zinc-700">
      <Button
        ref={forYouRef}
        className="flex-1 bg-transparent"
        onClick={() => setFeed("For you")}
      >
        <span>For you </span>
      </Button>
      <Button
        ref={followingRef}
        className="flex-1 bg-transparent"
        onClick={() => setFeed("Following")}
      >
        <span>Following</span>
      </Button>

      <div
        ref={divRef}
        className="absolute bottom-0 h-1 rounded-lg bg-sky-500 transition-all"
      />
    </div>
  );
};

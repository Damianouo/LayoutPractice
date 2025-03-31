import { NavLink } from "react-router-dom";
import HomeSvg from "../../svgs/HomeSvg";
import SearchSvg from "../../svgs/SearchSvg";
import DatabaseSvg from "../../svgs/DatabaseSvg";

const navlist = "flex justify-center p-1";
const navlink =
  "flex flex-col items-center justify-center rounded-md p-2 text-sm transition-colors hover:bg-zinc-800";

const Navbar = () => {
  return (
    <nav className="border-t border-zinc-700">
      <ul className="grid grid-cols-3">
        <li className={navlist}>
          <NavLink className={navlink}>
            <HomeSvg />
            <span>Home</span>
          </NavLink>
        </li>
        <li className={navlist}>
          <NavLink className={navlink}>
            <SearchSvg />
            <span>Search</span>
          </NavLink>
        </li>
        <li className={navlist}>
          <NavLink className={navlink}>
            <DatabaseSvg />
            <span>MusicBase</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

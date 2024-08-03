/* eslint-disable react/prop-types */
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
const NavLinks = ({ className, onClick }) => {
  return (
    <ul className={className}>
      {routes.map((route) => (
        <li key={`navlink-${route.url}`}>
          <NavLink
            to={route.url}
            onClick={onClick}
            className="block rounded-md px-4 py-3 transition-colors hover:bg-zinc-700"
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

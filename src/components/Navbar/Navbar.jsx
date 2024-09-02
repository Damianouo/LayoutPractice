import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const Navbar = () => {
  return (
    <nav>
      <ul className="fixed bottom-0 left-0 grid w-full grid-cols-[repeat(auto-fit,minmax(40px,1fr))]">
        {routes.map((route) => (
          <li key={route.url}>
            <NavLink
              to={route.url}
              className="flex items-center justify-center border text-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full uppercase transition-colors hover:bg-zinc-900">
                {route.label[0]}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

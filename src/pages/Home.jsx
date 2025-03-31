import { NavLink } from "react-router-dom";
import HomeSvg from "../svgs/HomeSvg";

const Home = () => {
  return (
    <div>
      <HomeSvg className="h-12 w-12" />
      <NavLink to="/artist/Ghostly_Kisses" className="bg-zinc-800 p-2">
        Artist
      </NavLink>
    </div>
  );
};

export default Home;

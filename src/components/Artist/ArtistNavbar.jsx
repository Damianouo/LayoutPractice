/* eslint-disable react/prop-types */
import Button from "../UI/Button";

const ArtistNavbar = ({ pageIndex, setPageIndex }) => {
  return (
    <ul className="flex gap-4 px-4 text-zinc-400">
      <li>
        <Button
          onClick={() => setPageIndex(0)}
          className={`p-0 ${pageIndex === 0 && "text-white"}`}
        >
          Music
        </Button>
      </li>
      <li>
        <Button
          onClick={() => setPageIndex(1)}
          className={`p-0 ${pageIndex === 1 && "text-white"}`}
        >
          Clip
        </Button>
      </li>
      <li>
        <Button
          onClick={() => setPageIndex(2)}
          className={`p-0 ${pageIndex === 2 && "text-white"}`}
        >
          Event
        </Button>
      </li>
      <li>
        <Button
          onClick={() => setPageIndex(3)}
          className={`p-0 ${pageIndex === 3 && "text-white"}`}
        >
          Merch
        </Button>
      </li>
    </ul>
  );
};

export default ArtistNavbar;

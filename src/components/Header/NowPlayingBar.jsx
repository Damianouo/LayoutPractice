import SongInfo from "./SongInfo";
import PlayBtn from "./PlayBtn";
import ProgressBar from "../UI/ProgressBar";
const NowPlayingBar = () => {
  return (
    <div className="mx-2 rounded-md bg-gradient-to-b from-red-950 to-zinc-950 p-2">
      <div className="flex items-center justify-between">
        <SongInfo />
        <PlayBtn />
      </div>
      <ProgressBar className="mt-2" />
    </div>
  );
};

export default NowPlayingBar;

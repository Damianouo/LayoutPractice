import { useLoaderData } from "react-router-dom";
import ArrowShuffleSvg from "../../svgs/ArrowShuffleSvg";
import DotsSvg from "../../svgs/DotsSvg";
import PlaySvg from "../../svgs/PlaySvg";

const ArtistControlBar = () => {
  const artist = useLoaderData();
  const monthlyListener =
    artist.monthlyListener >= 1000
      ? `${Math.round(artist.monthlyListener / 1000)}k`
      : artist.monthlyListener;
  return (
    <div className="p-4 text-sm text-zinc-400">
      <p>{monthlyListener} monthly listener</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <button className="rounded-2xl border px-4 py-1">follow</button>
          <button>
            <DotsSvg />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button>
            <ArrowShuffleSvg />
          </button>
          <button className="bg-zephyr-500 rounded-full p-4">
            <PlaySvg className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistControlBar;

import { useState } from "react";
import ghost from "../../assets/ghost.jpg";
import album1 from "../../assets/album1.jpg";
import ChevronRightSvg from "../../svgs/ChevronRightSvg";
const ArtistPick = () => {
  const [isScalingUp, setIsScalingUp] = useState(false);
  return (
    <div className="p-4">
      <h2 className="pb-2 text-lg">Artist Pick</h2>
      <div
        onMouseEnter={() => setIsScalingUp(true)}
        onMouseLeave={() => setIsScalingUp(false)}
        className="relative aspect-[3/2] overflow-hidden rounded-md"
      >
        <img
          style={{ transform: isScalingUp ? "scale(1.1)" : "scale(1)" }}
          className="h-full w-full object-cover object-center brightness-75 contrast-[90%] transition"
          src={ghost}
          alt="artist img"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white p-[2px] pr-4">
          <img
            className="aspect-square h-8 rounded-full"
            src={ghost}
            alt="artist img"
          />
          <p className="text-xs font-semibold text-black">
            new album, Darkroom, out now x
          </p>
        </div>
        <div className="absolute bottom-0 left-0 grid w-full grid-cols-[auto,1fr,auto] items-center gap-4 p-4">
          <img
            className="h-14 w-14 rounded-md"
            src={album1}
            alt="album1 cover img"
          />
          <div>
            <h3>Complete Ghostly Kisses</h3>
            <p className="text-sm text-zinc-400">Playlist</p>
          </div>
          <ChevronRightSvg />
        </div>
      </div>
    </div>
  );
};

export default ArtistPick;

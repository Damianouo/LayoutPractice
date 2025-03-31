import { Link, useLoaderData } from "react-router-dom";
import CheckSvg from "../../svgs/CheckSvg";
const ArtistAbout = () => {
  const artist = useLoaderData();

  const openDialog = () => {};

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg">About</h2>
      <div className="relative aspect-square overflow-hidden rounded-md">
        <img
          className="object-cover object-center brightness-90"
          src={artist.profilePicture}
          alt="artist profile picture"
        />
        <Link
          to={`/aboutDetail/${artist.id}`}
          className="absolute left-0 top-0 flex h-full w-full flex-col items-stretch justify-between p-4 md:hidden"
        >
          {artist.verified && (
            <h3 className="flex items-center gap-2">
              <span className="rounded-full bg-blue-700 p-1">
                <CheckSvg className="h-4 w-4" />
              </span>
              <span>Verified Artist</span>
            </h3>
          )}
          <div className="text-left">
            <p>{artist.monthlyListener} monthly listeners</p>
            <p className="mt-4 overflow-hidden text-ellipsis whitespace-nowrap">
              {artist.bio}
            </p>
          </div>
        </Link>
        <button
          onClick={openDialog}
          className="absolute left-0 top-0 hidden h-full w-full flex-col items-stretch justify-between p-4 md:flex"
        >
          {artist.verified && (
            <h3 className="flex items-center gap-2">
              <span className="rounded-full bg-blue-700 p-1">
                <CheckSvg className="h-4 w-4" />
              </span>{" "}
              <span>Verified Artist</span>
            </h3>
          )}
          <div className="text-left">
            <p>{artist.monthlyListener} monthly listeners</p>
            <p className="mt-4 overflow-hidden text-ellipsis whitespace-nowrap">
              {artist.bio}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ArtistAbout;

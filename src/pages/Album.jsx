import { Link, useLoaderData } from "react-router-dom";
import { artistsData } from "../dummyData";
import PageHeader from "../components/Artist/PageHeader";
const Album = () => {
  const { artist, album } = useLoaderData();
  return (
    <section>
      <PageHeader title={album.albumTitle} bg="57,147,137" />
      <div className="p-4">
        <div className="px-12">
          <img
            className="aspect-square object-cover object-center"
            src={album.cover}
            alt="album cover image"
          />
        </div>
        {/* album info */}
        <div className="w-fit py-4 text-sm">
          <h2 className="text-2xl">{album.albumTitle}</h2>
          <Link to={`/artist/${artist.id}`} className="flex items-center gap-2">
            <img
              className="my-2 h-6 w-6 rounded-full"
              src={artist.profilePicture}
              alt="artist profile picture"
            />
            <span>{artist.name}</span>
          </Link>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>{album.type}</span>
            <div className="h-1 w-1 rounded-full bg-zinc-400"></div>
            <span>{album.year}</span>
          </div>
        </div>
        {/* control bar */}
        {/* songs */}
        <ul></ul>
      </div>
    </section>
  );
};

export default Album;

export const loader = ({ params }) => {
  return {
    artist: artistsData[params.artistId],
    album: artistsData[params.artistId].albums[params.albumId],
  };
};

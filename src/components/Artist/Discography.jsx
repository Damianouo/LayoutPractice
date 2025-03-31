import { Link, useLoaderData } from "react-router-dom";

const Discography = () => {
  const artist = useLoaderData();
  const { albums } = artist;
  const albumsArr = Object.values(albums);
  const sortedAlbums = albumsArr.toSorted((a, b) => b.year - a.year);
  return (
    <div className="p-4">
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-lg">Discography</h2>
        <button className="text-sm text-zinc-400">Show all</button>
      </div>
      <ul>
        {sortedAlbums.map((album) => (
          <li key={album.albumTitle}>
            <Link
              to={`/album/${artist.id}/${album.id}`}
              className="grid grid-cols-[auto,1fr] items-center gap-4 py-2 text-left"
            >
              <img
                className="h-20 w-20 object-cover object-center"
                src={album.cover}
                alt="album cover img"
              />
              <div>
                <h3>{album.albumTitle}</h3>
                <p className="flex items-center gap-1 text-sm text-zinc-400">
                  <span>{album.year}</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-400"></span>
                  <span>{album.type}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center pt-2">
        <button className="rounded-full border border-zinc-400 px-4 py-1 text-sm">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Discography;

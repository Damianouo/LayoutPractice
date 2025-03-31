import { useLoaderData } from "react-router-dom";
import DotsSvg from "../../svgs/DotsSvg";

const getMostPopularSongs = (albums, num) => {
  let allSongs = [];
  for (let property in albums) {
    allSongs = [...allSongs, ...albums[property].songs];
  }
  const sortedSongs = allSongs.sort((a, b) => b.playCount - a.playCount);
  return sortedSongs.slice(0, num);
};
const MostPopularSongs = () => {
  const { albums } = useLoaderData();
  const mostPopularSongs = getMostPopularSongs(albums, 5);

  return (
    <div className="py-4">
      <h2 className="px-4 text-lg">Most Popular</h2>
      <ol>
        {mostPopularSongs.map((song, index) => (
          <li className="grid grid-cols-[1fr,auto] py-2" key={song.title}>
            <button className="grid grid-cols-[40px,auto,1fr] items-center">
              <p className="text-sm">{index + 1}</p>
              <img
                className="h-14 w-14 object-cover object-center"
                src={albums[song.album].cover}
                alt="album cover img"
              />
              <div className="px-4 text-left">
                <p>{song.title}</p>
                <p className="text-sm text-zinc-400">{song.playCount}</p>
              </div>
            </button>
            <button className="p-4">
              <DotsSvg />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MostPopularSongs;

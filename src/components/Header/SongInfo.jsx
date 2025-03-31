import ghost from "../../assets/ghost.jpg";

const SongInfo = () => {
  return (
    <div className="grid grid-cols-[auto,1fr] grid-rows-2 gap-x-2 gap-y-1 text-xs">
      <img
        className="row-span-2 h-12 w-12 rounded-md object-cover object-center"
        src={ghost}
        alt="album cover"
      />
      <span className="self-end">Longsome Hero</span>
      <span className="self-start text-zinc-400">Ghostly Kisses</span>
    </div>
  );
};

export default SongInfo;

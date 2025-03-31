/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const FeaturingArtist = () => {
  const artist = useLoaderData();
  return (
    <div className="p-4">
      <h2 className="pb-4 text-lg">Featuring {artist.name}</h2>
      <ul className="flex gap-4 overflow-x-scroll">
        {artist.featuring.map((feat) => (
          <Featuring key={feat.title} feat={feat} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturingArtist;

const Featuring = ({ feat }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <li
      onPointerDown={() => setIsMouseDown(true)}
      onPointerUp={() => setIsMouseDown(false)}
      className="transition"
      style={{
        transform: isMouseDown ? "scale(0.95)" : "scale(1)",
        filter: isMouseDown ? "brightness(0.7)" : "brightness(1)",
      }}
    >
      <a className="block w-40 text-sm" href="#">
        <img
          className="aspect-square w-full object-cover object-center"
          src={feat.cover}
          alt="featuring cover image"
        />
        <h3 className="my-2">{feat.title}</h3>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-zinc-400">
          {feat.description}
        </p>
      </a>
    </li>
  );
};

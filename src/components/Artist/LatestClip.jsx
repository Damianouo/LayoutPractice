/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";

const LatestClip = ({ title }) => {
  const { clips } = useLoaderData();
  const sortedClips = clips.toSorted(
    (a, b) => new Date(b.time) - new Date(a.time),
  );
  const latest3Clips = sortedClips.slice(0, 3);
  const clipTitle = title || "Latest Clip";
  return (
    <div className="p-4">
      <h2 className="text-lg">{clipTitle}</h2>
      <ul className="mt-4 grid grid-cols-3 gap-4">
        {latest3Clips.map((clip) => (
          <li key={clip.src}>
            <img
              className="aspect-[5/9] rounded-md object-cover object-center"
              src={clip.src}
              alt="clip"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestClip;

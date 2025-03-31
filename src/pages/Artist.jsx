import { useRef, useState } from "react";
import ArtistControlBar from "../components/Artist/ArtistControlBar";
import PageHeader from "../components/Artist/PageHeader";
import ArtistNavbar from "../components/Artist/ArtistNavbar";
import ArtistMusic from "../components/Artist/pages/ArtistMusic";
import ArtistClip from "../components/Artist/pages/ArtistClip";
import ArtistEvent from "../components/Artist/pages/ArtistEvent";
import ArtistMerch from "../components/Artist/pages/ArtistMerch";
import { artistsData } from "../dummyData";
import { useLoaderData } from "react-router-dom";
const Artist = () => {
  const artist = useLoaderData();
  const [pageIndex, setPageIndex] = useState(0);
  const scrollElementRef = useRef();
  return (
    <section
      style={{ backgroundImage: `url(${artist.profilePicture})` }}
      className="h-full overflow-y-scroll bg-[length:100%] bg-no-repeat"
      ref={scrollElementRef}
    >
      <PageHeader
        title={artist.name}
        bg="57,147,137"
        scrollElementRef={scrollElementRef}
        topBound={150}
        animationLength={50}
      />
      {/* artist name */}
      <h1 className="px-4 pb-4 pt-52 text-4xl font-bold">{artist.name}</h1>
      {/* rest of contents */}
      <div className="bg-zinc-900">
        <ArtistControlBar />
        <ArtistNavbar pageIndex={pageIndex} setPageIndex={setPageIndex} />
        {/* content */}
        <div className="overflow-hidden">
          <div
            style={{ transform: `translateX(${pageIndex * -100}vw)` }}
            className="flex transition-transform"
          >
            <ArtistMusic />
            <ArtistClip />
            <ArtistEvent />
            <ArtistMerch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;

export const loader = ({ params }) => {
  return artistsData[params.artistId];
};

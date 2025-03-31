import { useLoaderData } from "react-router-dom";
import { artistsData } from "../dummyData";
import WikipediaSvg from "../svgs/WikipediaSvg";
import XSvg from "../svgs/XSvg";
import InstagramSvg from "../svgs/InstagramSvg";
import FacebookSvg from "../svgs/FacebookSvg";
import PageHeader from "../components/Artist/PageHeader";

const AboutDetailPage = () => {
  const artist = useLoaderData();
  const { externalLinks } = artist;
  return (
    <section className="h-full">
      <PageHeader title={artist.name} bg="39,39,42" />
      <div className="h-full overflow-y-scroll px-4 pb-20 pt-20">
        <img
          className="aspect-square w-full object-cover object-center"
          src={artist.profilePicture}
          alt="artist profile picture"
        />
        <div className="py-4">
          <div>
            <h2 className="text-4xl font-semibold">
              {artist.monthlyListener.toLocaleString()}
            </h2>
            <p>Monthly Listener</p>
          </div>
          <p className="my-4 text-zinc-400">{artist.bio}</p>
          <div className="flex items-center gap-2 text-zinc-400">
            <img
              className="aspect-square w-8 rounded-full"
              src={artist.profilePicture}
              alt="artist profile picture"
            />
            <p>by {artist.name}</p>
          </div>
        </div>

        <ul>
          <li>
            <a
              className="flex items-center gap-4 py-2"
              href={externalLinks.wikipedia}
              target="_blank"
            >
              <WikipediaSvg />
              <span>Wikipedia</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-4 py-2"
              href={externalLinks.x}
              target="_blank"
            >
              <XSvg />
              <span>X</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-4 py-2"
              href={externalLinks.instagram}
              target="_blank"
            >
              <InstagramSvg />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-4 py-2"
              href={externalLinks.facebook}
              target="_blank"
            >
              <FacebookSvg />
              <span> Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutDetailPage;

export const loader = ({ params }) => {
  return artistsData[params.artistId];
};

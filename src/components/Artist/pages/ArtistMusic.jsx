import ArtistPick from "../ArtistPick";
import MostPopularSongs from "../MostPopularSongs";
import Discography from "../Discography";
import FeaturingArtist from "../FeaturingArtist";
import LatestClip from "../LatestClip";
import ArtistAbout from "../ArtistAbout";

const ArtistMusic = () => {
  return (
    <div className="w-screen shrink-0">
      <MostPopularSongs />
      <ArtistPick />
      <Discography />
      <FeaturingArtist />
      <LatestClip />
      <ArtistAbout />
      <div />
    </div>
  );
};

export default ArtistMusic;

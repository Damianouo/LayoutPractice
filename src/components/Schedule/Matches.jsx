import { getSortedMatches, leagueData } from "../../utils/league";
import MatchLi from "./MatchLi";
const sortedMatches = getSortedMatches(leagueData);

const Matches = () => {
  return (
    <ul className="p-8 text-2xl uppercase">
      {sortedMatches.map((match) => (
        <MatchLi key={match.team1 + match.team2 + match.date} match={match} />
      ))}
    </ul>
  );
};

export default Matches;

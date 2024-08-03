export const leagueData = [
  {
    title: "lcs",
    region: "north america",
    matches: [
      { team1: "tl", team2: "c9", date: "2023-08-02T16:00:00Z" },
      { team1: "fly", team2: "sr", date: "2023-08-02T19:00:00Z" },
    ],
  },
  {
    title: "lec",
    region: "emea",
    matches: [
      { team1: "g2", team2: "bds", date: "2023-07-27T23:00:00Z" },
      { team1: "fnc", team2: "g2", date: "2023-07-28T23:00:00Z" },
      { team1: "fnc", team2: "bds", date: "2023-08-10T23:00:00Z" },
    ],
  },
  {
    title: "lck",
    region: "korea",
    matches: [
      { team1: "t1", team2: "gen", date: "2023-08-03T14:00:00Z" },
      { team1: "fox", team2: "drx", date: "2023-08-03T17:00:00Z" },
      { team1: "bro", team2: "kt", date: "2023-08-04T14:00:00Z" },
    ],
  },
];

export function getSortedMatches(arr) {
  const reducedMatches = arr.reduce((accumulator, currentValue) => {
    return [...accumulator, ...currentValue.matches];
  }, []);

  return reducedMatches.toSorted((a, b) => new Date(a.date) - new Date(b.date));
}

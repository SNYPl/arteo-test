import { SLO, FI, SE, LV, NO, SK } from "../common/svg/countryFlags";

export const hockeyData = {
  title: "ICE HOCKEY",
  group1: {
    title: "BOYS",
    teams: [
      {
        team1: [
          {
            flag: <SK />,
            player: "SLOVENIA",
            score: [0, 0, 3, 2],
          },
          {
            flag: <SE />,
            player: "SWITZERLAND",
            score: [0, 0, 1, 2],
          },
        ],
      },
      {
        team2: [
          {
            flag: <FI />,
            player: "FINLAND",
            score: [6, 1, 3, 2],
          },
          {
            flag: <NO />,
            player: "NORWAY",
            score: [7, 2, 1, 2],
          },
        ],
      },
    ],
  },
  group2: {
    title: "GIRLS",
    teams: [
      {
        team1: [
          {
            flag: <SLO />,
            player: "SLOVAKIA",
            score: [0, 2, 2, 2],
          },
          {
            flag: <LV />,
            player: "LATVIA",
            score: [0, 1, 2, 2],
          },
        ],

        team2: [
          {
            flag: <FI />,
            player: "FINLAND",
            score: [0, 0, 2, 1],
          },
          {
            flag: <NO />,
            player: "NORWAY",
            score: [0, 0, 1, 1],
          },
        ],
      },
    ],
  },
};

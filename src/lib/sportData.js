import {
  SLO,
  SUI,
  SPA,
  SBR,
  PL,
  FI,
  SE,
  CZ,
  LV,
  FR,
  GE,
  IT,
  NO,
  SK,
  AT,
  EE,
  HU,
  IL,
} from "../common/svg/countryFlags";

export const sportDataArray = [
  {
    title: "BIATHLON",
    group1: {
      title: "100M R-1 GIRLS",
      teams: [
        {
          flag: <SLO />,
          flagTitle: "SLO",
          player: "L. Repinc",
          time: "31:34.07",
        },
        {
          flag: <PL />,
          flagTitle: "POL",
          player: "K. Badacz",
          time: "31:34.12",
        },
        {
          flag: <SK />,
          flagTitle: "SVK",
          player: "J. Borgula",
          time: "31:34.20",
        },
        {
          flag: <SE />,
          flagTitle: "SWE",
          player: "S. Anderson",
          time: "31:34.39",
        },
        {
          flag: <FR />,
          flagTitle: "FRA",
          player: "L. Thievent",
          time: "31:34.59",
        },
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "31:35.05",
        },
        {
          flag: <AT />,
          flagTitle: "AUT",
          player: "V. Olivier",
          time: "31:35.10",
        },
      ],
    },
    group2: {
      title: "100M R-1 BOYS",
      teams: [
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "1:29.93",
        },
      ],
    },
  },
  {
    title: "CROSS COUNTRY SKIING",
    group1: {
      title: "10 km Individual start free (boys)",
      teams: [
        {
          flag: <FI />,
          flagTitle: "FIN",
          player: "N. Anttola",
          time: "21:08.07",
        },
        {
          flag: <SUI />,
          flagTitle: "SUI",
          player: "N. Steiger",
          time: "21:08.32",
        },
        {
          flag: <SE />,
          flagTitle: "SWE",
          player: "E. Danielsson",
          time: "21:08.40",
        },
        {
          flag: <SE />,
          flagTitle: "SWE",
          player: "L. Eriksson",
          time: "21:08.54",
        },
        { flag: <CZ />, flagTitle: "CZE", player: "J. Tuz", time: "21:08.59" },
        {
          flag: <LV />,
          flagTitle: "LAT",
          player: "L. Kaparkalejs",
          time: "21:09.02",
        },
        {
          flag: <AT />,
          flagTitle: "AUT",
          player: "V. Olivier",
          time: "21:09.15",
        },
      ],
    },
    group2: {
      title: "5 km individual start classic (girls)",
      teams: [
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "1:29.93",
        },
      ],
    },
  },
  {
    title: "ALPINE SKIING",
    group1: {
      title: "Slalom (boys)",
      teams: [
        {
          flag: <FI />,
          flagTitle: "FIN",
          player: "E. Saravuo",
          time: "1:29.55",
        },
        {
          flag: <NO />,
          flagTitle: "NOR",
          player: "J. Braathen Herland",
          time: "1:29.57",
        },
        {
          flag: <FI />,
          flagTitle: "FIN",
          player: "J. Kempainen",
          time: "1:30.12",
        },

        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "1:30.12",
        },
        {
          flag: <AT />,
          flagTitle: "AUT",
          player: "V. Olivier",
          time: "1:30.30",
        },
        {
          flag: <SK />,
          flagTitle: "SVK",
          player: "L. Kaparkalejs",
          time: "1:30.40",
        },
        {
          flag: <PL />,
          flagTitle: "POL",
          player: "V. Badacz",
          time: "1:30.44",
        },
      ],
    },
    group2: {
      title: "SLALOM (GIRLS)",
      teams: [
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "1:29.93",
        },
      ],
    },
  },
  {
    title: "SNOWBOARD",
    group1: {
      title: "Big Air (Boys)",
      teams: [
        {
          flag: <FR />,
          flagTitle: "FRA",
          player: "J. Merken",
          time: "",
        },
        {
          flag: <SPA />,
          flagTitle: "SPA",
          player: "N. Salleras I Colls",
          time: "",
        },
        {
          flag: <SK />,
          flagTitle: "SVK",
          player: "J. Borgula",
          time: "",
        },
        {
          flag: <SE />,
          flagTitle: "SWE",
          player: "S. Anderson",
          time: "",
        },
        {
          flag: <SLO />,
          flagTitle: "SLO",
          player: "L. Thievent",
          time: "",
        },
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "",
        },
        {
          flag: <AT />,
          flagTitle: "AUT",
          player: "V. Olivier",
          time: "",
        },
      ],
    },
    group2: {
      title: "Big Air (GIRLS)",
      teams: [
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "1:29.93",
        },
      ],
    },
  },
  {
    title: "FREESTYLE SKIING",
    group1: {
      title: "Big Air (Boys)",
      teams: [
        {
          flag: <SUI />,
          flagTitle: "SUI",
          player: "F. Rhyner",
          time: "179.8P",
        },
        {
          flag: <FR />,
          flagTitle: "FRA",
          player: "N. Brocart Alegre",
          time: "177.5P",
        },
        {
          flag: <EE />,
          flagTitle: "EST",
          player: "H. Sildaru",
          time: "177.3P",
        },
        {
          flag: <FI />,
          flagTitle: "FIN",
          player: "L. Haggstrom",
          time: "176.4P",
        },
        {
          flag: <SUI />,
          flagTitle: "SUI",
          player: "L. Thievent",
          time: "175.0P",
        },

        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "174.4P",
        },
        {
          flag: <AT />,
          flagTitle: "AUT",
          player: "V. Olivier",
          time: "174.3P",
        },
      ],
    },
    group2: {
      title: "100M R-1 BOYS",
      teams: [
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "1:29.93",
        },
      ],
    },
  },
  {
    title: "FIGURE SKATING",
    group1: {
      title: "Single Skating Free Skating (Boys)",
      teams: [
        {
          flag: <IL />,
          flagTitle: "ISR",
          player: "N. Sheiko",
          time: "190.98P",
        },
        {
          flag: <GE />,
          flagTitle: "GEO",
          player: "K. Supatashvili",
          time: "189.00P",
        },
        {
          flag: <SUI />,
          flagTitle: "SUI",
          player: "N. Rossi",
          time: "185.51P",
        },

        {
          flag: <FI />,
          flagTitle: "FIN",
          player: "L. Karhunen",
          time: "171.79P",
        },
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "A. Pezzetta",
          time: "167.96P",
        },

        {
          flag: <PL />,
          flagTitle: "POL",
          player: "N. Streuli",
          time: "162.34P",
        },
        {
          flag: <AT />,
          flagTitle: "AUT",
          player: "V. Olivier",
          time: "161.05P",
        },
      ],
    },
    group2: {
      title: "Single Skating Free Skating (GIRLS)",
      teams: [
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "1:29.93",
        },
      ],
    },
  },
  {
    title: "SHORT TRACK",
    group1: {
      title: "Boys 1500 m",
      teams: [
        {
          flag: <HU />,
          flagTitle: "HUN",
          player: "D. Major",
          time: "2:22.573",
        },
        {
          flag: <NO />,
          flagTitle: "NOR",
          player: "M. Johan Klevstuen",
          time: "2:24.250",
        },
        {
          flag: <PL />,
          flagTitle: "POL",
          player: "D. Palenceusz",
          time: "2:29.518",
        },
        {
          flag: <LV />,
          flagTitle: "LAT",
          player: "L. Leinis Laizans",
          time: "2:31.572",
        },
        {
          flag: <SBR />,
          flagTitle: "SBR",
          player: "L. Jasic",
          time: "2:32.133",
        },
        {
          flag: <PL />,
          flagTitle: "POL",
          player: "H. Mazur",
          time: "2:34.406",
        },
        {
          flag: <PL />,
          flagTitle: "POL",
          player: "K. Wozniak",
          time: "2:35.310",
        },
      ],
    },
    group2: {
      title: "100M R-1 BOYS",
      teams: [
        {
          flag: <IT />,
          flagTitle: "ITA",
          player: "E. Mondinelli",
          time: "1:29.93",
        },
      ],
    },
  },
];

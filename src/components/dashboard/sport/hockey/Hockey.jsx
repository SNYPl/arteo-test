import React, { useState, useEffect } from "react";
import style from "./style.module.css";

const deepCopy = (obj) => {
  return Array.isArray(obj)
    ? obj.map(deepCopy)
    : obj && typeof obj === "object"
    ? Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deepCopy(v)]))
    : obj;
};

const Hockey = ({ data }) => {
  const [currentData, setCurrentData] = useState(deepCopy(data));
  const [lastUpdatedScore, setLastUpdatedScore] = useState({
    group: null,
    teamIndex: null,
    playerIndex: null,
    scoreIndex: null,
  });

  const getRandomTeam = (teams) => {
    const groups = Object.keys(teams).filter((key) => teams[key].teams);
    if (!groups.length) return null;

    const randomGroupIndex = Math.floor(Math.random() * groups.length);
    const groupKey = groups[randomGroupIndex];
    const group = teams[groupKey];

    const randomTeamIndex = Math.floor(Math.random() * group.teams.length);
    const randomTeam = group.teams[randomTeamIndex];
    const teamKeys = Object.keys(randomTeam).filter((key) => randomTeam[key]);
    if (!teamKeys.length) return null;

    const teamKey = teamKeys[Math.floor(Math.random() * teamKeys.length)];
    return { groupKey, randomTeamIndex, team: randomTeam[teamKey] };
  };

  const updateScores = () => {
    setCurrentData((prevData) => {
      const newData = deepCopy(prevData);
      const randomTeamData = getRandomTeam(newData);

      if (randomTeamData) {
        const { groupKey, randomTeamIndex, team } = randomTeamData;
        const randomPlayerIndex = Math.floor(Math.random() * team.length);
        const player = team[randomPlayerIndex];
        const randomScoreIndex = Math.floor(
          Math.random() * player.score.length
        );

        player.score[randomScoreIndex] += 1;

        setLastUpdatedScore({
          group: groupKey,
          teamIndex: randomTeamIndex,
          playerIndex: randomPlayerIndex,
          scoreIndex: randomScoreIndex,
        });
      }

      return newData;
    });
  };

  useEffect(() => {
    const interval = setInterval(updateScores, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <article className={style.sport}>
      <div className={style.title}>
        <h2>{data.title}</h2>
      </div>
      <div className={style.gradient}></div>
      <div className={style.info}>
        <Group
          title={data.group1.title}
          teams={currentData?.group1?.teams}
          lastUpdatedScore={lastUpdatedScore}
        />
        <Group
          title={data.group2.title}
          teams={currentData?.group2?.teams}
          lastUpdatedScore={lastUpdatedScore}
        />
      </div>
    </article>
  );
};

const Group = ({ title, teams, lastUpdatedScore }) => {
  return (
    <>
      <div className={style.group}>
        <p className={style.centeredText}>
          <span className={style.line}></span>
          <span className={style.text}>{title.toUpperCase()}</span>
          <span className={style.line}></span>
        </p>
      </div>

      {teams?.map((player, index) => {
        const { team1, team2 } = player;

        if (!team1 && !team2) return null;

        return (
          <article className={`${style.playerInfo}`} key={index}>
            {team1 && (
              <TeamList
                team={team1}
                index={index}
                groupKey="group1"
                lastUpdatedScore={lastUpdatedScore}
              />
            )}
            {team2 && (
              <TeamList
                team={team2}
                index={index}
                groupKey="group2"
                lastUpdatedScore={lastUpdatedScore}
              />
            )}
          </article>
        );
      })}
    </>
  );
};

const TeamList = ({ team, groupKey, index, lastUpdatedScore }) => {
  if (!team) return null;

  return (
    <div className={style.player}>
      {team?.map((el, playerIndex) => {
        return (
          <article className={style.teamInfo} key={playerIndex}>
            <div className={style.teamiTems}>
              <div className={style.flag}>
                <div className={style.flagIcon}>{el.flag}</div>
              </div>
              <h3 className={style.playerName}>{el.player}</h3>
            </div>
            <p className={style.scoreInfo}>
              {el.score?.map((score, scoreIndex) => (
                <span
                  key={scoreIndex}
                  className={
                    lastUpdatedScore.group === groupKey &&
                    lastUpdatedScore.teamIndex === index &&
                    lastUpdatedScore.playerIndex === playerIndex &&
                    lastUpdatedScore.scoreIndex === scoreIndex
                      ? style.updatedScore
                      : ""
                  }
                >
                  {score}
                </span>
              ))}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default Hockey;

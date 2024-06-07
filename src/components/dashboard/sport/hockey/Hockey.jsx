import React, { useState } from "react";
import style from "./style.module.css";

const Hockey = ({ data }) => {
  const [teams, setTeams] = useState(data);

  return (
    <article className={style.sport}>
      <div className={style.title}>
        <h2>{teams.title}</h2>
      </div>
      <div className={style.gradient}></div>
      <div className={style.info}>
        <Group title={data.group1.title} teams={teams.group1.teams} />
        <Group title={data.group2.title} teams={teams.group2.teams} />
      </div>
    </article>
  );
};

const Group = ({ title, teams }) => (
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

      return (
        <article className={`${style.playerInfo}`} key={index}>
          <TeamList team={team1} index={index} />
          <TeamList team={team2} index={index} />
        </article>
      );
    })}
  </>
);

const TeamList = ({ team }) => {
  return (
    <div className={style.player}>
      {team?.map((el, id) => {
        return (
          <article className={style.teamInfo} key={id}>
            <div className={style.teamiTems}>
              <div className={style.flag}>
                <div className={style.flagIcon}>{el.flag}</div>
              </div>
              <h3 className={style.playerName}>{el.player}</h3>
            </div>
            <p className={style.scoreInfo}>
              {el.score?.map((score, id) => (
                <span key={id}>{score}</span>
              ))}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default Hockey;

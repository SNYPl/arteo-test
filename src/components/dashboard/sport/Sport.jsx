import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { ArrowDown, ArrowUp } from "../../../common/svg/sport";

const Sport = ({ data, gradient }) => {
  const [teams, setTeams] = useState(data);
  const [swapping, setSwapping] = useState(false);
  const [swapped, setSwapped] = useState(false);
  const [swapPositions, setSwapPositions] = useState([]);

  useEffect(() => {
    const getRandomPositions = (length) => {
      let pos1 = Math.floor(Math.random() * length);
      let pos2 = Math.floor(Math.random() * length);
      while (pos1 === pos2) {
        pos2 = Math.floor(Math.random() * length);
      }
      return [pos1, pos2];
    };

    const interval = setInterval(() => {
      const [pos1, pos2] = getRandomPositions(teams.group1.teams.length);
      setSwapPositions([pos1, pos2]);

      setSwapping(true);
      setTimeout(() => {
        const updatedTeams = { ...teams };

        const temp = updatedTeams.group1.teams[pos1];
        updatedTeams.group1.teams[pos1] = updatedTeams.group1.teams[pos2];
        updatedTeams.group1.teams[pos2] = temp;

        const tempTime = updatedTeams.group1.teams[pos1].time;
        updatedTeams.group1.teams[pos1].time =
          updatedTeams.group1.teams[pos2].time;
        updatedTeams.group1.teams[pos2].time = tempTime;

        setTeams(updatedTeams);
        setSwapping(false);
        setSwapped(true);

        setTimeout(() => {
          setSwapped(false);
        }, 3000);
      }, 3000);
    }, 6000);

    return () => clearInterval(interval);
  }, [teams]);

  return (
    <article className={style.sport}>
      <div className={style.title}>
        <h2>{teams.title}</h2>
      </div>
      <div className={` ${style.gradient} ${gradient}`}></div>
      <div className={style.info}>
        <div className={style.group}>
          <p className={style.centeredText}>
            <span className={style.line}></span>
            <span className={style.text}>
              {data.group1.title.toUpperCase()}
            </span>
            <span className={style.line}></span>
          </p>
        </div>

        {teams.group1.teams.map((player, index) => {
          let backgroundColorClass = "";
          if (index < 3) {
            backgroundColorClass = style[`bgColor${index + 1}`];
          }
          const sortedSwapPositions = swapPositions.sort((a, b) => a - b);
          return (
            <article
              className={`${style.playerInfo} ${backgroundColorClass} ${
                swapPositions.includes(index) && swapping ? style.swapping : ""
              } ${
                sortedSwapPositions[1] === index && swapped
                  ? style.swappedDown
                  : ""
              }  ${
                sortedSwapPositions[0] === index && swapped
                  ? style.swappedUp
                  : ""
              }`}
              key={index}
            >
              <div className={style.layout}></div>
              <div className={`${style.player}`}>
                <div className={style.flag}>
                  <span>{index + 1}.</span>
                  <div className={style.flagIcon}>{player.flag}</div>
                </div>
                <div className={style.flagTitle}>
                  <p>({player.flagTitle})</p>
                </div>
                <h3 className={style.playerName}>
                  {player.player}
                  <span className={style.arrowIcon}>
                    {index === sortedSwapPositions[0] && <ArrowDown />}
                    {index === sortedSwapPositions[1] && <ArrowUp />}
                  </span>
                </h3>
              </div>
              <p className={style.scoreInfo}>{player.time}</p>
            </article>
          );
        })}

        <div className={`${style.group} ${style.groupTwo}`}>
          <p className={style.centeredText}>
            <span className={style.line}></span>
            <span className={style.text}>
              {data.group2.title.toUpperCase()}
            </span>
            <span className={style.line}></span>
          </p>
          {teams.group2.teams.map((player, index) => {
            return (
              <article className={style.playerInfo} key={index}>
                <div className={style.player}>
                  <div className={style.flag}>
                    <span>{index + 1}.</span>
                    {player.flag}
                  </div>
                  <div className={style.flagTitle}>
                    <p>({player.flagTitle})</p>
                  </div>
                  <h3 className={style.playerName}>{player.player}</h3>
                </div>
                <p className={style.scoreInfo}>{player.time}</p>
              </article>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Sport;

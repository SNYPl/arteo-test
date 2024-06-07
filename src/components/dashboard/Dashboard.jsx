import React from "react";
import style from "./style.module.css";
import Sport from "./sport/Sport";
import { sportDataArray } from "../../lib/sportData";
import { hockeyData } from "../../lib/hockeyData";
import Hockey from "./sport/hockey/Hockey";

const Dashboard = () => {
  return (
    <section className={style.dashboard}>
      {sportDataArray.map((el, id) => {
        return <Sport data={el} key={id} gradient={`gradient-${id}`} />;
      })}
      <Hockey data={hockeyData} />
    </section>
  );
};

export default Dashboard;

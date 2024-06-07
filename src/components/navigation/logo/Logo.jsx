import React from "react";
import style from "./style.module.css";
import { LogoSvg } from "../../../common/svg/navigation";

const Logo = () => {
  return (
    <article className={style.logo}>
      <div className={style.logoContainer}>
        <LogoSvg />
      </div>
      <div className={style.logoTitle}>
        <h2>EYEOF 2025 </h2>
        <span>BAKURIANI</span>
      </div>
    </article>
  );
};

export default Logo;

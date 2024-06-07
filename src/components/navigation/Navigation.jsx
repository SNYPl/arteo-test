import React from "react";
import style from "./style.module.css";
import Logo from "./logo/Logo";
import Date from "./date/Date";

const Navigation = () => {
  return (
    <header className={style.navigation}>
      <Logo />
      <Date />
    </header>
  );
};

export default Navigation;

import React from "react";
import s from "./IconLogo.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconLogo = () => {
  return (
    <svg className={s.iconLogo}>
      <use href={`${spriteIcon}#icon-logo-green`}></use>
    </svg>
  );
};

export default IconLogo;
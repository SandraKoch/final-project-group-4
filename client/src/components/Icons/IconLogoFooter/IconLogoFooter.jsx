import React from "react";
import s from "./IconLogoFooter.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconLogoFooter = () => {
  return (
    <svg className={s.IconLogoFooter}>
      <use href={`${spriteIcon}#icon-logo-light`}></use>
    </svg>
  );
};

export default IconLogoFooter;
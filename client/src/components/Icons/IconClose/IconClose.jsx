import React from "react";
import s from "./IconClose.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconClose = () => {
  return (
    <svg className={s.iconClose}>
      <use href={`${spriteIcon}#icon-close`}></use>
    </svg>
  );
};

export default IconClose;
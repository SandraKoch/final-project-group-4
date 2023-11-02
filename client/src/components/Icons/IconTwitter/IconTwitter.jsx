import React from "react";
import s from "./IconTwitter.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconTwitter = () => {
  return (
    <svg className={s.iconTwitter}>
      <use href={`${spriteIcon}#icon-twitter`}></use>
    </svg>
  );
};

export default IconTwitter;
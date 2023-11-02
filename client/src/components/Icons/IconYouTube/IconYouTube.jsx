import React from "react";
import s from "./IconYouTube.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconYouTube = () => {
  return (
    <svg className={s.iconYouTube}>
      <use href={`${spriteIcon}#icon-youtube`}></use>
    </svg>
  );
};

export default IconYouTube;
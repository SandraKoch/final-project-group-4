import React from "react";
import s from "./IconInstagram.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconInstagram = () => {
  return (
    <svg className={s.iconInstagram}>
      <use href={`${spriteIcon}#icon-instagram`}></use>
    </svg>
  );
};

export default IconInstagram;
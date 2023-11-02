import React from "react";
import s from "./IconArrow.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconArrow = () => {
  return (
    <svg className={s.iconArrow}>
      <use href={`${spriteIcon}#icon-arrow`}></use>
    </svg>
  );
};

export default IconArrow;
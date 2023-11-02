import React from "react";
import s from "./IconEmail.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconEmail = () => {
  return (
    <svg className={s.iconEmail}>
      <use href={`${spriteIcon}#icon-email`}></use>
    </svg>
  );
};

export default IconEmail;
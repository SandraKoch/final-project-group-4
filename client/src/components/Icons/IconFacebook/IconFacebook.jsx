import React from "react";
import s from "./IconFacebook.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconFacebook = () => {
  return (
    <svg className={s.iconFacebook}>
      <use href={`${spriteIcon}#icon-facebook`}></use>
    </svg>
  );
};

export default IconFacebook;
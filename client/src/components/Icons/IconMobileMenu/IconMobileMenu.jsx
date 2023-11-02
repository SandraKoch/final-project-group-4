import React from "react";
import s from "./IconMobileMenu.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconMobileMenu = () => {
  return (
    <svg className={s.iconMobileMenu}>
      <use href={`${spriteIcon}#icon-mobile-menu`}></use>
    </svg>
  );
};

export default IconMobileMenu;
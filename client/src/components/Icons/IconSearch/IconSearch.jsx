import React from "react";
import s from "./IconSearch.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconSearch = () => {
  return (
    <svg className={s.iconSearch}>
      <use href={`${spriteIcon}#icon-search`}></use>
    </svg>
  );
};

export default IconSearch;

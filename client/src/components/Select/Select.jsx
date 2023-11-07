import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoriesData from "../../data/categoriesList.json";
import { setCategories } from "../../redux/categories/categoriesSlice";
import { selectCategories } from "../../redux/categories/selectors";
import css from "./Select.module.css";

export const Select = ({ handleInputChange }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState();

  // useEffect(() => {
  //   fetch(categoriesData)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(setCategories(data));
  //     });
  // }, [dispatch]);

  return (
    <div className={css.category__box}>
      <label htmlFor="category" className={css.label}>
        Category
      </label>
      <div className={css.select__box}>
        <select
          id="category"
          name="category"
          className={css.select}
          value={categories}
          onChange={handleInputChange}
        >
          {categories.slice(0, 6).map((category) => (
            <option
              key={category.title}
              value={category.title}
              className={css.option}
            >
              {category.title}
            </option>
          ))}
        </select>
        <svg
          fill="none"
          id="icon-down"
          viewBox="0 0 32 32"
          className={css.arrow}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="5.333"
            d="M29.333 9.333 16 22.666 2.667 9.333"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import css from "../RecipesList/RecipesList.module.css";

import { selectRecipes, selectSelectedCategory } from "../../redux/selectors";

export const RecipesList = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  const allRecipes = useSelector(selectRecipes);

  const recipesPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;

  const recipesByCategory = allRecipes.filter(
    (recipe) => recipe.category === selectedCategory
  );
  const recipesToDisplay = recipesByCategory.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(recipesByCategory.length / recipesPerPage);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "14px",
          rowGap: "100px",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {recipesToDisplay.length > 0 ? (
          recipesToDisplay.map((recipe, index) => (
            <div className={css.recipe__card}>
              <img
                key={recipe._id}
                src={recipe.thumb}
                alt={recipe.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "8px",
                }}
              />
              <a href="#" className={css.recipe__btn}>
                <span className={css.btn__text}>{recipe.title}</span>
              </a>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
      <div>
        {recipesByCategory.length > recipesPerPage && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "78px",
            }}
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={css.pagination}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* <Paginator/>
      <Footer/> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <p className={css.text}>© 2023 All Rights Reserved.</p>
        <p className={css.text2}>Terms of Service</p>
      </div>
    </div>
  );
};

export default RecipesList;
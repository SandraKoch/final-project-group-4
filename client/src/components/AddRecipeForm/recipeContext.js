import React, { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [recipeData, setRecipeData] = useState({
    categoryValue: "Breakfast",
    timeValue: "5 min",
    selectedImgPath: null,
    selectedImgFile: null,
    titleValue: "",
    aboutValue: "",
  });
  return (
    <RecipeContext.Provider value={{ recipeData, setRecipeData }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipeData() {
  return useContext(RecipeContext);
}

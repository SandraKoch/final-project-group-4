import React from "react";
import css from "./AddRecipeForm.module.css";
import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields";
import { RecipeIngredientsFields } from "../RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "../RecipePreparationFields/RecipePreparationFields";
import { RecipeProvider } from "../AddRecipeForm/recipeContext";

export const AddRecipeForm = () => {
  return (
    <div>
      <RecipeProvider>
        <RecipeDescriptionFields />
      </RecipeProvider>
      {/* <RecipeIngredientsFields /> */}
      <RecipePreparationFields />
    </div>
  );
};

export default AddRecipeForm;

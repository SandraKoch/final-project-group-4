import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoriesList } from "./operations";

const initialState = {
  categories: [],
  selectedCategory: "Beef",
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCategoriesList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getAllCategoriesList.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getAllCategoriesList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const { setSelectedCategory } = categoriesSlice.actions;
export const selectRecipesByCategory = (categoryName) => (state) =>
  state.recipes.recipes.filter((recipe) => recipe.category === categoryName);

export const categoriesReducer = categoriesSlice.reducer;

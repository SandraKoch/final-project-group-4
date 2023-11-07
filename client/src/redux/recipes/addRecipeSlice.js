import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  category: "",
  instructions: [],
  description: "",
  picture: "",
  time: "",
  ingredients: [],
  isSuccess: false,
};

const addRecipeSlice = createSlice({
  name: "addRecipe",
  initialState,
  reducers: {
    updateTitle(state, action) {
      state.title = action.payload;
    },
    updateCategory(state, action) {
      state.category = action.payload.name;
    },
    updateInstructions(state, action) {
      state.instructions = action.payload;
    },
    updateDescription(state, action) {
      state.description = action.payload;
    },
    updatePicture(state, action) {
      state.picture = action.payload;
    },
    updateTime(state, action) {
      state.time = action.payload;
    },
    updateIngredients(state, action) {
      state.ingredients = action.payload;
    },
  },
  extraBuilders: (builder) => {
    builder.addCase(addRecipe.fulfilled, (state, action) => {
      state.title = action.payload;
      state.category = action.payload.category;
      state.instructions = action.payload.instructions;
      state.description = action.payload.description;
      state.picture = action.payload.thumb;
      state.time = action.payload.time;
      state.ingredients = action.payload.ingredients;
      state.isSuccess = true;
    });
  },
});
export const {
  updateTitle,
  updateCategory,
  updateInstructions,
  updateDescription,
  updatePicture,
  updateTime,
  updateIngredients,
} = addRecipeSlice.actions;
export const addRecipeReducer = addRecipeSlice.reducer;

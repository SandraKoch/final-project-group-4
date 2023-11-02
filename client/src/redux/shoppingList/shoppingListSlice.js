import { createSlice } from "@reduxjs/toolkit";
import {
  addToShoppingList,
  deleteFromShoppingList,
  getShoppingList,
} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const shoppingSlice = createSlice({
  name: "shoppingList",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getShoppingList.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteFromShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteFromShoppingList.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((e) => e.ingredientId !== payload);
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteFromShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addToShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addToShoppingList.fulfilled, (state, { payload }) => {
        state.items = [...payload];
        state.isLoading = false;
      })
      .addCase(addToShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});
export const shoppingReducer = shoppingSlice.reducer;

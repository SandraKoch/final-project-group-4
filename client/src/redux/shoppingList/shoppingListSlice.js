import { createSlice } from "@reduxjs/toolkit";
import {
  addToShoppingList,
  deleteFromShoppingList,
  getShoppingList,
} from "./operations";

const initialState = {
  shoppingList: [],
  isLoading: false,
};

const shoppingSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data.shoppingList;
        state.isLoading = false;
      })
      .addCase(getShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteFromShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteFromShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(deleteFromShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addToShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addToShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(addToShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});
export const shoppingReducer = shoppingSlice.reducer;

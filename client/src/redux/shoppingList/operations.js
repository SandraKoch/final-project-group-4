import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

export const getShoppingList = createAsyncThunk(
  "shoppingList/get-list",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`shopping-list/ingredients/list`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  "shoppingList/add-ingredient",
  async ({ recipeId, ingredientId }, thunkAPI) => {
    try {
      const res = await axios.post(
        `shopping-list/ingredients/add?recipeId=${recipeId}&ingredientId=${ingredientId}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromShoppingList = createAsyncThunk(
  "shoppingList/remove-ingredient",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(
        `shopping-list/ingredients/remove?ingredientId=${id}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
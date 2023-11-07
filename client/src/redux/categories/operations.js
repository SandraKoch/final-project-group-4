import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

// Pobieranie wszystkich kategorii
export const getAllCategoriesList = createAsyncThunk(
  "categories/getAllCategoriesList",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/category-list");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Pobieranie przepisów wg kategorii
export const getRecipesByCategory = createAsyncThunk(
  "categories/getRecipesByCategory",
  async ({ category }) => {
    try {
      const response = await axios.get(`/recipes/${category}`);
      return response.data;
    } catch (error) {
      throw new Error("Error loading recipes by category", error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/api/";

export const getShoppingList = createAsyncThunk(
  "shoppingList/list",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`shopping-list/list`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  "shoppingList/add-ingredient",
  async (_, thunkAPI) => {
    try {
      const res = await axios.post(`shopping-list/add-ingredient`);
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
      const res = await axios.delete(`shopping-list/remove-ingredient/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

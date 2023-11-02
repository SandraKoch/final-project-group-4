import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (registerData, thunkAPI) => {
    const payload = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
    };
    try {
      const response = await axios.post("/users/signup", payload);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (signinData, thunkAPI) => {
    const payload = {
      email: signinData.email,
      password: signinData.password,
    };
    try {
      const response = await axios.post("/users/signin", payload);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (logoutData, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout", logoutData);
      clearAuthHeader();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "users/current",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.get("/users/current", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async (updateData, thunkAPI) => {
    try {
      const response = await axios.patch("/users/update", updateData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

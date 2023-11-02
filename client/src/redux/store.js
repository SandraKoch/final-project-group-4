import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./CategoriesRedux/categoriesSlice";
import { recipeReducer } from "./CategoriesRedux/recipesSlice";
import { searchReducer } from "../redux/search/searchSlice"; // Dodaj import searchReducer
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authReducer } from "./auth/authSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    categories: categoriesReducer,
    recipes: recipeReducer,
    search: searchReducer, // Dodaj searchReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

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
import { favoriteReducer } from "./FavoriteRedux/favoriteSlice";
import { shoppingReducer } from "./shoppingList/shoppingListSlice";


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn", "user"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    categories: categoriesReducer,
    recipes: recipeReducer,
    favorite: favoriteReducer,
    search: searchReducer, // Dodaj searchReducer
    shoppingList: shoppingReducer,
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

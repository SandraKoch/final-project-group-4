import { lazy } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import ShoppingList from "./pages/ShoppingList";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { refreshToken } from "./redux/auth/authSlice";
import { useEffect } from "react";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";
import { Categories } from "./pages/Categories/Categories";

const Main = lazy(() => import("./pages/Main/Main"));
// const Categories = lazy(() => import('...'));
// const AddRecipe = lazy(() => import('...'));
// const MyRecipes = lazy(() => import('...'));
// const Favorite = lazy(() => import('...'));
// const ShoppingList = lazy(() => import('...'));
// const Search = lazy(() => import('...'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <div>Refreshing user...</div>
      <Loader />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* 
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/my" element={<MyRecipes />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search" element={<Search />} /> */}
        <Route path="/shopping-list" element={<ShoppingList />}></Route>/
        <Route path="/categories/:categoryName" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

import { lazy } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { refreshToken } from "./redux/auth/authSlice";
import { useEffect } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
// import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";
import { Categories } from "./pages/Categories/Categories";
import { Search } from "./components/Search/Search";
import { RestrictedRoute } from "./components/RestrictedRoute";
import Home from "./pages/Home";

const Register = lazy(() => import("./pages/RegisterPage"));
const Signin = lazy(() => import("./pages/SigninPage"));
// const Categories = lazy(() => import('...'));
// const AddRecipe = lazy(() => import('...'));
const MyRecipes = lazy(() => import("./pages/MyRecipesPage/MyRecipesPage"));
// const Favorite = lazy(() => import('...'));
const ShoppingList = lazy(() => import("./pages/ShoppingList"));
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
        {/* <Route index element={<Main />} /> */}
        {/* <Main /> is not a page but a part of home page which renders differently
        for logged users and displays 'welcome page' for not logged guests */}
        <Route index element={<Home />} />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        />
        <Route
          path="signin"
          element={<RestrictedRoute redirectTo="/" component={<Signin />} />}
        />
        {/* 
        <Route path="/add" element={<AddRecipe />} />

        <Route path="/my" element={<MyRecipes />} />
        <Route path="/favorite" element={<Favorite />} />*/}
        <Route path="/search" element={<Search />} /> 
        <Route path="/shopping-list" element={<ShoppingList />}></Route>/
        <Route path="/categories/:categoryName" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

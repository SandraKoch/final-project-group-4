import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import UserLogo from "../UserLogo/UserLogo";
import ModalMenu from "../ModalMenu/ModalMenu";
import Footer from "../Footer/Footer";
import s from "./SharedLayout.module.css";
import { useAuth } from "../../hooks/useAuth";
import IconSearch from "../Icons/IconSearch/IconSearch";
import IconLogo from "../Icons/IconLogo/IconLogo";

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn && (
        <header className={s.header}>
          <Link to="/">
            <IconLogo />
          </Link>
          <nav className={s.nav}>
            <Link className={s.link} to="/categories/:categoryName">
              Categories
            </Link>
            <Link className={s.link} to="/add">
              Add recipes
            </Link>
            <Link className={s.link} to="/my">
              My recipes
            </Link>
            <Link className={s.link} to="/favorite">
              Favorites
            </Link>
            <Link className={s.link} to="/shopping-list">
              Shopping list
            </Link>
            <Link className={s.link} to="/search">
              <IconSearch />
            </Link>
          </nav>
          <div className={s.menu}>
            <UserLogo />
            <ModalMenu />
          </div>
        </header>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default SharedLayout;

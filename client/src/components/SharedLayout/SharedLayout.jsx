import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import UserLogo from '../UserLogo/UserLogo';
import s from './_SharedLayout.module.scss';

const SharedLayout = () => {
    return (
        <>
            <header className={s.header}>
                <div>
                    <Link to="/">
                        <svg className={s.logo} width="40" height="40">
                            <use href="./images/icons/icons.svg#icon-logo"></use>
                        </svg>
                    </Link>
                </div>
                <div>
                    <nav className={s.nav}>
                        <Link className={s.link} to="/categories/:categoryName">Categories</Link>
                        <Link className={s.link} to="/add">Add recipes</Link>
                        <Link className={s.link} to="/my">My recipes</Link>
                        <Link className={s.link} to="/favorite">Favorites</Link>
                        <Link className={s.link} to="/shopping-list">Shopping list</Link>
                        <Link className={s.link} to="/search">
                            <svg className={s.logo} width="40" height="40">
                                <use href="./images/icons/icons.svg#icon-search"></use>
                            </svg>
                        </Link>
                    </nav>
                </div>
                <div>
                    <UserLogo />
                </div>
            </header>
            <Suspense fallback={<Loader />} >
                <Outlet />
            </Suspense>
            <footer>Footer</footer>
        </>
    );
};

export default SharedLayout;
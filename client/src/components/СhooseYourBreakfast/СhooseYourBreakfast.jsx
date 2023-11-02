import { Link } from "react-router-dom";
import s from "./СhooseYourBreakfast.module.css";

const СhooseYourBreakfast = () => {
    return (
        <div className={s.block}>
            <p className={s.blockText}>
                <span>Delicious and healthy</span> way to enjoy a variety of fresh ingredients in one satisfying meal
            </p>
            <Link className={s.blockLink} to="/categories/:categoryName">
                See recipes
            </Link>
        </div>
    );
};

export default СhooseYourBreakfast;
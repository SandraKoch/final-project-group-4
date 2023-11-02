import СhooseYourBreakfast from "../../components/СhooseYourBreakfast/СhooseYourBreakfast";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import s from "./Main.module.css";

const Main = () => {
    return (
        <div className={s.heroHeader}>
            <h1 className={s.heroHeaderHeading}><span>So</span>Yummy</h1>
            <p className={s.heroHeaderDescription}>
                "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.
            </p>
            <SearchComponent />
            <СhooseYourBreakfast />
        </div>
    );
};

export default Main;
import searchDesktop from "../../images/backgrounds/search-desktop.png";
import searchDesktop2 from "../../images/backgrounds/search-desktop@2x.png";
import searchTablet from "../../images/backgrounds/search-tablet.png";
import searchTablet2 from "../../images/backgrounds/search-tablet@2x.png";
import css from "./ShoppingList.module.css";

export const EmptyShoppingList = () => {
  return (
    <div className={css.empty}>
      <h2>Shopping list is empty</h2>
      <picture>
        <source
          srcSet={`${searchTablet}, ${searchTablet2} 2x`}
          media="(max-width:767px)"
          sizes="(min-width:250px) 250px, 100vw"
        />
        <source
          srcSet={`${searchDesktop}, ${searchDesktop2} 2x`}
          media="(mi-width:768px)"
          sizes="(min-width:500px) 500px, 100vw"
        />
        <img
          src={searchDesktop2}
          alt="Shopping list is empty"
          height="700px"
          width="450px"
        />
      </picture>
    </div>
  );
};

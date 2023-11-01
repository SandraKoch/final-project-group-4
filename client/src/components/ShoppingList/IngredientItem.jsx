import css from "./ShoppingList.module.css";

const IngredientItem = ({ ingredient, handleDelete }) => {
  const { id, ttl, measure, thb } = ingredient;
  return (
    <section className={css.ingredient}>
      <div className={css.ingredientWrapper}>
        <div className={css.imageOgIngredient}>
          <img src={thb} alt="ttl" />
        </div>
        <p className={css.nameOfIngredient}>{ttl}</p>
      </div>

      <div className={css.measureWrapper}>
        <p className={css.amountOfIngredient}>{measure}</p>
        <button type="button" onClick={() => handleDelete(id)}>
          <svg
            width="20"
            height="20"
            fill="#8baa36"
            onClick={() => handleDelete(id)}
          >
            <use href="./images/icons/icons.svg#icon-close"></use>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default IngredientItem;

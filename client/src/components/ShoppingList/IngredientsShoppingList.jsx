import { useDispatch, useSelector } from "react-redux";
import IngredientItem from "./IngredientItem";
import css from "./ShoppingList.module.css";
import { useEffect } from "react";
import {
  deleteFromShoppingList,
  getShoppingList,
} from "../../redux/shoppingList/operations";
import { shoppingListSelector } from "../../redux/shoppingList/selectors";

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(shoppingListSelector);

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteFromShoppingList(id));
  };

  return (
    <div>
      <section className={css.title}>Shopping list</section>
      <div className={css.head}>
        <p className={css.leftHead}>Product</p>
        <div className={css.rightHead}>
          <p>Number</p>
          <p>Remove</p>
        </div>
      </div>
      <div className={css.ingredients}>
        {shoppingList.map((ingredients) => (
          <IngredientItem
            ingredient={ingredients}
            handleDelete={handleDelete}
            key={ingredients.ttl}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientsShoppingList;

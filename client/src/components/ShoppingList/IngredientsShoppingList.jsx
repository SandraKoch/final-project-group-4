import { useDispatch, useSelector } from "react-redux";
import IngredientItem from "./IngredientItem";
import css from "./ShoppingList.module.css";
import { useEffect } from "react";
import {
  deleteFromShoppingList,
  getShoppingList,
} from "../../redux/shoppingList/operations";
import {
  isLoadingSelector,
  shoppingListSelector,
} from "../../redux/shoppingList/selectors";
import Loader from "../Loader/Loader";
import { EmptyShoppingList } from "./EmptyShoppingList";

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(shoppingListSelector);
  const isLoading = useSelector(isLoadingSelector);
  console.log(shoppingList);

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteFromShoppingList(id));
  };

  return (
    <div className={css.shoppingList}>
      <div className={css.title}>Shopping list</div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {shoppingList.length > 0 && (
            <section>
              <div className={css.head}>
                <p className={css.leftHead}>Product</p>
                <div className={css.rightHead}>
                  <p>Number</p>
                  <p>Remove</p>
                </div>
              </div>
              <div className={css.ingredients}>{}</div>
            </section>
          )}
          {shoppingList.length === 0 ? (
            <EmptyShoppingList />
          ) : (
            shoppingList?.map((ingredients) => (
              <IngredientItem
                ingredient={ingredients}
                handleDelete={handleDelete}
                key={ingredients._id}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default IngredientsShoppingList;

const {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
} = require("../services/shoppingList");

const getShoppingListHandler = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const shoppingList = await getShoppingList(owner);
    res.status(200).json({ shoppingList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const addToShoppingListHandler = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { iid, number } = req.body;
    const ingredient = { iid, number };

    const shoppingList = await addToShoppingList(owner, ingredient);

    if (!shoppingList) {
      return res.status(404).json({
        message: "There is no such ingredient",
      });
    }
    res.status(201).json({
      shoppingList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const deleteFromShoppingListHandler = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { iid, number } = req.body;
    const result = await deleteFromShoppingList(owner, iid, number);

    if (!result) {
      return res.status(404).json({
        message: "There is no shopping list",
      });
    }
    res.status(204).json({ newShoppingList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};
module.exports = {
  getShoppingListHandler,
  addToShoppingListHandler,
  deleteFromShoppingListHandler,
};

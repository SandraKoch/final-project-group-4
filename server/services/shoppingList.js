const { Ingredients } = require("../models/ingredients");
const { ShoppingList } = require("../models/shoppingList");

const getShoppingList = async (owner) => {
  const result = await ShoppingList.find({
    owner,
  });
  return result;
};

const addToShoppingList = async (owner, ingredient) => {
  const { iid, number } = ingredient;
  const ingredientId = await Ingredients.findById(iid);

  if (!ingredientId) {
    return null;
  }
  const { ttl, thb } = ingredientId;
  const ingredientToShoppingList = {
    iid,
    ttl,
    thb,
    number,
    owner,
  };
  const result = await ShoppingList.create(ingredientToShoppingList);
  return result;
};

const deleteFromShoppingList = async (owner, iid, number) => {
  const result = await ShoppingList.findOneAndDelete({
    owner,
    iid,
    number,
  });
  return result;
};

module.exports = {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
};

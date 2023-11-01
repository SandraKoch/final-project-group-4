const { Ingredients } = require("../models/ingredients");
const { Recipes } = require("../models/recipes");
const { getAllIngredients } = require("../services/ingredients");
const {
  addToShoppingList,
  deleteFromShoppingList,
} = require("../services/shoppingList");

const getShoppingListHandler = async (req, res) => {
  try {
    const shoppingList = await getAllIngredients();
    res.status(200).json(shoppingList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const addToShoppingListHandler = async (req, res) => {
  try {
    const { user } = req;
    const { recipeId, ingredientId } = req.query;
    const recipe = await Recipes.findById(recipeId);
    const [ingredient] = recipe.ingredients.filter(
      ({ id }) => id.toString() === ingredientId
    );
    const result = await Ingredients.findById(ingredientId);
    if (!result) {
      throw new Error(`Ingredient is not found`);
    }
    user.shoppingList.push({
      id: result.id.toString(),
      measure: result.measure,
      ttl: result.ttl,
      thb: result.thb,
    });
    await user.save();
    res.status(200).json({ data: user.shoppingList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const deleteFromShoppingListHandler = async (req, res) => {
  try {
    const { user } = req;
    const { ingredientId } = req.query;
    const newShoppingList = await User.findByIdAndUpdate(
      user._id,
      {
        shoppingList: { id: ingredientId },
      },
      { new: true }
    );
    res.status(200).json({ newShoppingList });
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

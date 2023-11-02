const { Ingredients } = require("../models/ingredients");
const { Recipes } = require("../models/recipes");
const { User } = require("../models/user");
const { getAllIngredients } = require("../services/ingredients");
const { getAllRecipes } = require("../services/recipes");
const {
  addToShoppingList,
  deleteFromShoppingList,
} = require("../services/shoppingList");

const getShoppingListHandler = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const shoppingList = await User.findById(userId).populate({
      path: "shoppingList",
      populate: { path: "ingredient", model: Ingredients },
    });
    res.status(200).json(shoppingList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const addToShoppingListHandler = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { ingredient, measure: newMeasure } = req.body;

    const recipe = await Ingredients.findById({ _id: ingredient });

    const newRecipe = {
      ingredient,
      measure: newMeasure,
      ingredientId: ingredient,
    };
    const usersIngredients = await User.findById(_id);
    if (
      !usersIngredients.shoppingList ||
      usersIngredients.shoppingList.length === 0
    ) {
      usersIngredients.shoppingList = [newRecipe];
      usersIngredients.save();
    } else if (usersIngredients.shoppingList.length > 0) {
      const i = usersIngredients.shoppingList.findIndex((e) => {
        return e.ingredient === ingredient;
      });
      if (i !== -1) {
        usersIngredients.shoppingList[i].measure =
          usersIngredients.shoppingList[i].measure.concat("/r/n", newMeasure);
      } else {
        usersIngredients.shoppingList = [
          usersIngredients.shoppingList,
          newRecipe,
        ];
      }
      usersIngredients.save();
    }

    res.status(200).json({
      data: usersIngredients.shoppingList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const deleteFromShoppingListHandler = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { id: ingredientId } = req.params;

    const newShoppingList = await User.findByIdAndUpdate(
      { _id: _id },
      {
        $pull: { shoppingList: { ingredient: ingredientId } },
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

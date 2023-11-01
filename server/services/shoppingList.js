// const { Ingredients } = require("../models/ingredients");

// // const getAllIngredients = async () => {
// //   try {
// //     return await Ingredients.find();
// //   } catch (e) {
// //     console.error(e);
// //   }
// // };

// const { Recipes } = require("../models/recipes");
// const { User } = require("../models/user");

// const addToShoppingList = async (req, res) => {
//   try {
//     const { user } = req;
//     const { recipeId, ingredientId } = req.query;
//     const recipe = await Recipes.findById(recipeId);
//     const [ingredient] = recipe.ingredients.filter(
//       ({ id }) => id.toString() === ingredientId
//     );
//     const result = await Ingredients.findById(ingredientId);
//     if (!result) {
//       throw new Error(`Ingredient is not found`);
//     }
//     user.shoppingList.push({
//       id: result.id.toString(),
//       measure: result.measure,
//       ttl: result.ttl,
//       thb: result.thb,
//     });
//     await user.save();
//     res.status(200).json({ data: user.shoppingList });
//   } catch (e) {
//     console.error(e);
//   }
// };

// const deleteFromShoppingList = async (req, res) => {
//   try {
//     const { user } = req;
//     const { ingredientId } = req.query;
//     const newShoppingList = await User.findByIdAndUpdate(
//       user._id,
//       {
//         shoppingList: { id: ingredientId },
//       },
//       { new: true }
//     );
//     res.status(200).json({ newShoppingList });
//   } catch (e) {
//     console.error(e);
//   }
// };
// module.exports = { addToShoppingList, deleteFromShoppingList };

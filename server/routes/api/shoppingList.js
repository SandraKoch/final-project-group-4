const express = require("express");
const {
  getShoppingListHandler,
  deleteFromShoppingListHandler,
  addToShoppingListHandler,
} = require("../../controllers/shoppingList");
const shoppingListRouter = express.Router();

shoppingListRouter.get("/list", getShoppingListHandler);
shoppingListRouter.post("/add-ingredient", addToShoppingListHandler);
shoppingListRouter.delete("/remove-ingredient", deleteFromShoppingListHandler);

module.exports = { shoppingListRouter };

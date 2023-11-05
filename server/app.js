const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/api/users");
const { recipesRouter } = require("./routes/api/recipes");
const { searchRouter } = require("./routes/api/search");
const { ingredientsRouter } = require("./routes/api/ingredients");
const { ownRecipesRouter } = require("./routes/api/ownRecipes");
//const { categoryRouter } = require("./routes/api/categorieslist");
const { shoppingListRouter } = require("./routes/api/shoppingList");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", usersRouter);
// use.use.("/api/auth", )
app.use("/api/recipes", recipesRouter);
app.use("/api/search", searchRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/ownRecipes", ownRecipesRouter);
//app.use("/api/category", categoryRouter);
app.use("/api/shopping-list", shoppingListRouter);

module.exports = { app };

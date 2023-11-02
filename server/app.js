const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/api/users");
const { recipesRouter } = require("./routes/api/recipes");
const { ingredientsRouter } = require("./routes/api/ingredients");
// const { usersRouter } = require("./routes/api/users");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", usersRouter);
// use.use.("/api/auth", )
app.use("/api/recipes", recipesRouter);
app.use("/api/ingredients", ingredientsRouter);
// app.use("/api/shopping-lists", );

module.exports = { app };

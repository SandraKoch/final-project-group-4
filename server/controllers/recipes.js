const {
  getAllRecipes,
  getMainPageRecipes,
  getRecipesFromCategory,
  getRecipesFromId,
} = require("../services/recipes");
const { getAllCategories } = require("../services/categoriesList");

const getAllRecipesHandler = async (req, res) => {
  try {
    const recipes = await getAllRecipes();
    return res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const getCategoryListHandler = async (req, res) => {
  try {
    const categories = await getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const getMainPageRecipesHandler = async (req, res) => {
  try {
    const { category } = req.body;
    const recipes = await getMainPageRecipes(category);
    return res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const getRecipesFromCategoryHandler = async (req, res) => {
  try {
    const { category } = req.params;
    const { page } = req.body;
    const recipes = await getRecipesFromCategory(category, page);
    if (recipes === null) {
      return res
        .status(404)
        .json({ message: "Nie znaleźliśmy więcej przepisów na ten moment" });
    }
    return res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const getRecipesFromIdHandler = async (req, res) => {
  try {
    const recipe = await getRecipesFromId(req);
    return res.json({ status: "success", code: 200, result: { recipe } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

module.exports = {
  getAllRecipesHandler,
  getCategoryListHandler,
  getMainPageRecipesHandler,
  getRecipesFromCategoryHandler,
  getRecipesFromIdHandler,
};

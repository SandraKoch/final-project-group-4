import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Loader } from "../../Loader/Loader";
import { getOwnRecipeById, getRecipeById } from '../../../services/api/recipesAPI';
import IngredientsContainer from './IngredientsContainer/IngredientsContainer';

import css from './Recipe.module.css';
import TopContainer from '../Recipe/TopContainer/TopContainer';

const Recipe = () => {
  const { recipeId } = useParams();
  const location = useLocation();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const storedFrom = JSON.parse(localStorage.getItem('fromId'));

    if (location.state?.from || storedFrom === recipeId) {
      setTimeout(async () => {
        await getOwnRecipeById(recipeId)
          .then(data => setRecipe(data))
          .catch(error => console.log(error));
        setIsLoading(false);
      }, 1000);
      localStorage.setItem('fromId', JSON.stringify(recipeId));
      return;
    }

    setTimeout(async () => {
      await getRecipeById(recipeId)
        .then(data => setRecipe(data))
        .catch(error => console.log(error));
      setIsLoading(false);
    }, 1000);
  }, [recipeId, location.state?.from, location]);

  const {
    description,
    time,
    title,
    ingredients,
    instructions,
    preview,
    previewImg,
    _id,
    favorite,
    youtube,
    fullImg,
  } = recipe;

  return (
    <>
      <TopContainer
        title={title}
        description={description}
        time={time}
        favorite={favorite}
        id={_id}
      />
      {isLoading ? (
        <div className="container">
          <Loader />
        </div>
      ) : (
        <div className={css.wrapper}>
          {
            <IngredientsContainer
              ingridients={ingredients}
              instructions={instructions}
              preview={preview}
              previewImg={previewImg}
              youtube={youtube}
              fullImg={fullImg}
            />
          }
        </div>
      )}
    </>
  );
};

export default Recipe;
import React from 'react';
import ReactDOM from 'react-dom';
import RecipeSummary from './RecipeSummary.jsx';

const Recipes = (props) => {
  let recipes = props.recipes;
  let recipeList = recipes.map( (recipe, i) => {
    return <RecipeSummary key={recipe.uuid} id={i} recipe={recipe} changeRecipeDetail={props.changeRecipeDetail} />
  });

  return  (
    <div>
      {recipeList}
    </div>
  );
}

export default Recipes;
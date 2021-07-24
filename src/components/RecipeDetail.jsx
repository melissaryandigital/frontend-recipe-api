import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const RecipeDetailContainer = styled.div`
  padding:20px;
  background-color: white;
  width: 800px;
  position: relative;
  font-size: 16px;
  border: 1px solid lightgray;

  div.detailprep {
    font-size: 16px;
  }

  div.desc {
    font-size: 22px;
    margin-bottom: 20px;
  }

  ul.specials li {
    font-style: italic;
    color: #d54215;
  }
  span {
    font-size: 14px;
  }
`;


const RecipeDetail = (props) => {
  let recipe = props.recipe;
  let specials = props.specials;


  let ingredients = recipe.ingredients.map((ingredient, i) => {
    let isSpecial = false;
    let specialIndex;

    specials.forEach((special, i) => {
      if (special.ingredientId === ingredient.uuid) {
        isSpecial = true;
        specialIndex = i;
      }
    });

    if (isSpecial) {
      return <li key={ingredient.uuid} id={i}> {ingredient.name} {ingredient.amount} {ingredient.measurement} <ul className='specials'><li>{specials[specialIndex].title} {specials[specialIndex].type} {specials[specialIndex].text}</li></ul></li>;
    } else {
      return <li key={ingredient.uuid} id={i}> {ingredient.name} {ingredient.amount} {ingredient.measurement}</li>;
    }

  });


  let recipeSteps = recipe.directions.map(direction => {
    if (direction.optional) {
      return <li>{direction.instructions} *optional</li>
    } else {
      return <li>{direction.instructions}</li>
    }
  });

  return (
    <RecipeDetailContainer key={recipe.uuid}>
      <h2>{recipe.title}</h2>
      <img src={recipe.images.medium} alt={recipe.title} />
      <div className='desc'>{recipe.description}</div>
      <div className='detailprep'>
        <div>Servings: {recipe.servings}</div>
        <div>Prep Time: {recipe.prepTime}</div>
        <div>Cook Time: {recipe.cookTime}</div>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients}
      </ul>
      <h3>Directions:</h3>
      <ol>
        {recipeSteps}
      </ol>

      <span>Originally Posted: {recipe.postDate}</span>
      <span>Updated: {recipe.editDate}</span>
    </RecipeDetailContainer>
  )
}

export default RecipeDetail;
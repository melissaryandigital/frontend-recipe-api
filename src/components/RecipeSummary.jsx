import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const RecipeContainer = styled.div`
  padding:10px;
  margin-bottom: 20px;
  background-color: white;
  width: 600px;
  font-size: 18px;
  border: 1px solid lightgray;
  overflow: hidden;
  position: relative;

  div.summaryDetails {
    float:right;
    width: 380px;
  }

  div.description {
    margin-bottom: 10px;
  }

  div.prep {
    font-size: 16px;
  }

  button {
    width: 100px;
    cursor: pointer;
    position: absolute;
    bottom: 10;
    right: 20;
  }
`;

const Title = styled.div`
  font-size: 26px;
`;

const RecipeSummary = (props) => {
  let recipe = props.recipe;
  return (

    <RecipeContainer key={recipe.uuid}>
      <img src={recipe.images.small} alt={recipe.title} />
      <div className='summaryDetails'>
        <h2 className='title'>{recipe.title}</h2>
        <div className='description'>{recipe.description}</div>
        <div className='prep'>
          <div>Servings: {recipe.servings}</div>
          <div>Prep Time: {recipe.prepTime}</div>
          <div>Cook Time: {recipe.cookTime}</div>
        </div>
        <button id={props.id} onClick={(e) => { props.changeRecipeDetail(e); }}>View recipe</button>
      </div>
    </RecipeContainer>

  )
}

export default RecipeSummary;
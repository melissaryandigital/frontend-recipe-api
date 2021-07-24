import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from './components/Recipes.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';
import Navigation from './components/Navigation.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      specials: [],
      selectedRecipe: {},
      isListView: true
    }

    this.getRecipes = this.getRecipes.bind(this);
    this.getSpecials = this.getSpecials.bind(this);
    this.returnToList = this.returnToList.bind(this);
    this.changeRecipeDetail = this.changeRecipeDetail.bind(this);
  }

  returnToList(e) {
    e.preventDefault();
    this.setState({
      isListView: true
    });
  }

  changeRecipeDetail(e) {
    e.preventDefault();
    let selected = this.state.recipes[e.target.id];
    this.setState({
      selectedRecipe: selected,
      isListView: false
    });
  }

  getRecipes() {
    fetch(`/recipes`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            recipes: result
          });
        })
      .catch((error) => {
        console.error(error);
      });
  }

  getSpecials() {
    fetch(`/specials`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            specials: result
          });
        })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getRecipes();
    this.getSpecials();
  }

  render() {
    if (this.state.isListView) {
      return (
        <>
          <h1>Featured Recipes</h1>
          <Recipes recipes={this.state.recipes} changeRecipeDetail={this.changeRecipeDetail} />
        </>
      )
    } else {
      return (
        <>
          <h1>Featured Recipes</h1>
          <Navigation returnToList={this.returnToList} />
          <RecipeDetail recipe={this.state.selectedRecipe} specials={this.state.specials} />
        </>
      )
    }
  }
}

export default App;
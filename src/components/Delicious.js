import React, {Component} from 'react';

import '../Delicious.css';
import DeliciousForm from './DeliciousForm';
import DeliciousRecipes from './DeliciousRecipes';

//const API_KEY = "88644a2a377f68746cc0267e10914cf2";
const API_KEY = "f13fd82da7f916744adb750f28b4b4f6"

class Delicious extends Component {
  state = {
    recipes:[]
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const data = await api_call.json();
    this.setState({recipes: data.recipes});
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes})
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return(
      <div className="App-delicious">
        <header className="App-delicious-header">
          <h1 className="App-delicious-title">Delicious Recipes</h1>
        </header>
        <DeliciousForm getRecipe={this.getRecipe}/>
        <DeliciousRecipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default Delicious;
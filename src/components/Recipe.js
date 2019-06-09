import React from "react";
import { Link } from "react-router-dom";

//const API_KEY = "88644a2a377f68746cc0267e10914cf2";
const API_KEY = "f13fd82da7f916744adb750f28b4b4f6";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              src={recipe.image_url}
              alt={recipe.title}
              style={{ height: "500px !important" }}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Recipe
              <span>
                <a href={recipe.source_url}>Click here</a>
              </span>
            </p>
            <button className="active-recipe__button">
              {/* <Link style= {{textDecoration: "none", color: "black"}} to="/delicious">Delicious Recipes</Link> */}
            </button>
            <button className="active-recipe__button">
              {/* <Link style= {{textDecoration: "none", color: "black"}} to="/">Go home</Link> */}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;

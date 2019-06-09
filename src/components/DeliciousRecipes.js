import React from "react";
import { Link } from "route-lite";
import Recipe from "./Recipe";

const DeliciousRecipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div
            className="col-md-4"
            key={recipe.recipe_id}
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img
                style={{ width: "100%", height: "220px" }}
                className="recipe__box-delicious_img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p className="recipes__subtitle">
                  Publisher:
                  <span>{recipe.publisher}</span>
                </p>
              </div>
              <button className="recipe_buttons">
                <Link
                  component={Recipe}
                  componentProps={{ recipe: recipe.title }}
                >
                  View Recipe
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default DeliciousRecipes;

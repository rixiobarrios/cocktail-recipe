import React from 'react';

import { Link } from 'react-router-dom';

const Recipes = props => {
    const normalizeRecipes = recipes => {
        let normalized = recipes.map(recipe => {
            let ingredients = [];

            for (let i = 1; i < 16; i++) {
                if (recipe[`strIngredient${i}`] != null) {
                    ingredients.push(recipe[`strIngredient${i}`]);
                }
            }

            return {
                id: recipe.idDrink,
                name: recipe.strDrink,
                instructions: recipe.strInstructions
                    ? recipe.strInstructions
                    : 'No instructions provided',
                image: recipe.strDrinkThumb,
                ingredients: ingredients
            };
        });
        return normalized;
    };

    // destructuring
    const { recipes } = props;

    console.log('recipes array ===>', recipes);
    console.log('loaded ===>', normalizeRecipes(recipes));
    return (
        <div className="container">
            <div className="row">
                {/* conditional statement */}
                {recipes === null && 'No recipes found:('}
                {recipes &&
                    recipes.map(recipe => {
                        return (
                            <div
                                key={recipe.strDrink}
                                className="recipe-container"
                            >
                                <div className="recipes-box">
                                    <img
                                        className="recipe-box-img"
                                        src={recipe.strDrinkThumb}
                                        alt={recipe.strDrink}
                                    />
                                    <div className="recipe-text">
                                        <h5 className="recipes-title">
                                            {/* substring to shorten drink title */}
                                            {recipe.strDrink.length < 10
                                                ? `${recipe.strDrink}`
                                                : `${recipe.strDrink.substring(
                                                      0,
                                                      15
                                                  )}...`}
                                        </h5>{' '}
                                    </div>
                                    <button className="recipe-buttons">
                                        <Link
                                            to={{
                                                pathname: `/recipe/${recipe.idDrink}`,
                                                state: { recipe: recipe }
                                            }}
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
};

export default Recipes;

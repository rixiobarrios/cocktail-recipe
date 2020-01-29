import React from 'react';

import { Link } from 'react-router-dom';

// const RecipeInfo = ({ currentRecipe }) => {
//     if (!currentRecipe) {
//         return null;
//     }
//     const ingredients = [];
//     function getRecipeIngredients() {
//         let i = 1;
//         while (currentRecipe['strIngredient' + i]) {
//             const name = currentRecipe['strIngredient' + i];
//             const measurement = currentRecipe['strMeasure' + i];
//             ingredients.push(name + ' : ' + measurement);
//             i++;
//         }
//         return ingredients;
//     }
//     getRecipeIngredients();
// };
// destructuring
const Recipes = props => (
    <div className="container">
        <div className="row">
            {/* conditional statement */}
            {recipes === null && <h2 className="not-found">No Recipe Found</h2>}
            {recipes &&
                recipes.map(recipe => {
                    return (
                        <div key={recipe.strDrink} className="recipe-container">
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

export default Recipes;

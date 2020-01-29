import React from 'react';

import { Link } from 'react-router-dom';

const Recipes = props => {
    // mapping and for looping over to avoid rendering "null" results on strIngredients and strMeasure
    const normalizeIngredient = recipes => {
        let normIngredients = recipes.map(recipe => {
            let ingredients = [];

            for (let i = 1; i < 16; i++) {
                if (recipe[`strIngredient${i}`] != null) {
                    ingredients.push(recipe[`strIngredient${i} `]);
                }
            }

            // let normMeasures = recipes.map(recipe => {
            //     let measures = [];

            //     for (let j = 1; j < 16; j++) {
            //         if (recipe[`strMeasure${j}`] != null) {
            //             measures.push(recipe[`strMeasure${j}`]);
            //         }
            //     }

            return {
                id: recipe.idDrink,
                name: recipe.strDrink,
                instructions: recipe.strInstructions,
                image: recipe.strDrinkThumb,
                ingredients: ingredients
                    ? recipe.strIngredients
                    : 'No  ingredients provided'
                // measures: measures ? recipe.strMeasures : 'No measures provided' //conditional messages
            };
        });
        return normIngredients;
    };
    // destructuring
    const { recipes } = props;
    return (
        <div className="container">
            <div className="row">
                {/* conditional statement */}
                {recipes === null && (
                    <h2 className="not-found">No Recipe Found</h2>
                )}
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

// function getIngredients(recipe) {
//     // create an empty array to hold all of the ingredients
//     const ingredients = []
//     // create an index and set it to the starting value
//     let i = 1;
//     // so long as there is an ingredient
//     while (recipe['strIngredient' + i]) {
//         // get the name and measurement
//         const name = recipe['strIngredient' + i]
//         const measurement = recipe['strMeasure' + i]
//         // push them into the array
//         ingredients.push(name + ' ' + measurement)
//         // increment the index
//         i++;
//     }
//     // return the ingredients when you're done
//     return ingredients
// }

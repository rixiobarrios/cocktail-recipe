import React from 'react';

import { Link } from 'react-router-dom';

const Recipes = props => {
    console.log('props.recipes', props);
    // destructuring
    const { recipes } = props;
    return (
        <div className="container">
            <div className="row">
                {/* conditional statement */}
                {recipes === null && 'No recipes found baby :('}
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
                                            {recipe.strDrink.length < 15
                                                ? `${recipe.strDrink}`
                                                : `${recipe.strDrink.substring(
                                                      0,
                                                      20
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

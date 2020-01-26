import React from 'react';

import { Link } from 'react-router-dom';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map(recipe => {
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
                                        state: { recipe: recipe.strDrink }
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

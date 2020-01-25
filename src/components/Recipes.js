import React from 'react';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map(recipe => {
                return (
                    <div key={recipe.strDrink} className="col-md-4">
                        <div className="recipes-box">
                            <img
                                className="recipe-box-img"
                                src={recipe.strDrinkThumb}
                                alt={recipe.strDrink}
                            />
                            <div className="recipe-text">
                                <h5 className="drink-titles">
                                    {recipe.strDrink.length < 20
                                        ? `${recipe.strDrink}`
                                        : `${recipe.strDrink.substring(
                                              0,
                                              25
                                          )}...`}
                                </h5>{' '}
                            </div>
                            <button className="recipe-buttons">
                                View Recipe
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Recipes;

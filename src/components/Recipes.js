import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = props => {
    const { recipes } = props;
    return (
        <div className="container">
            <div className="row">
                {/* conditional statement */}
                {recipes === null && (
                    <h2 className="not-found">No Recipe Found</h2> // no results response
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

import React from 'react';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map(recipe => {
                return (
                    <div className="col-md-4">
                        <div className="recipe-box">
                            <img
                                className="recipe-box-img"
                                src={recipe.strDrinkThumb}
                                alt={recipe.strDrink}
                            />
                            <div className="recipe-text">
                                <h5>{recipe.strDrink}</h5>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Recipes;

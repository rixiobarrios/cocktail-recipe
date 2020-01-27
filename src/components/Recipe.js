import React from 'react';

const Recipe = props => {
    const { recipe } = props.location.state;
    console.log('receipt thang ==>', recipe);
    return (
        <div className="container">
            <div className="active-recipe">
                <img
                    className="active-recipe-img"
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink}
                />
                <h3 className="active-recipe-title">{recipe.strDrink}</h3>
            </div>
        </div>
    );
};
export default Recipe;

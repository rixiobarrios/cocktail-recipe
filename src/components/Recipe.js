import React from 'react';
import { Link } from 'react-router-dom';
const Recipe = props => {
    const { recipe } = props.location.state;

    return (
        <div className="active-container">
            <div className="active-recipe-box">
                <img
                    className="active-recipe-img"
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink}
                />
                <h3 className="active-recipe-title">{recipe.strDrink}</h3>
                <ul className="active-details">
                    <li>
                        Ingredients:
                        {recipe.strIngredient1} {recipe.strMeasure1}
                        <li>Instructions: {recipe.strInstructions} </li>
                    </li>
                </ul>
                <button className="active-recipe-button">
                    <Link to="/">Go Home</Link>{' '}
                </button>
            </div>
        </div>
    );
};
export default Recipe;

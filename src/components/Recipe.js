import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = props => {
    const { recipe } = props.location.state;
    if (!recipe) {
        return null;
    }
    const ingredients = [];
    function getRecipeIngredients() {
        let i = 1;
        while (recipe['strIngredient' + i]) {
            const name = recipe['strMeasure' + i];
            const measurement = recipe['strIngredient' + i];
            ingredients.push(name + ' ' + measurement);
            i++;
        }

        return ingredients;
    }
    getRecipeIngredients();

    return (
        <div className="active-container">
            <div className="active-recipe-box">
                <img
                    className="active-recipe-img"
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink}
                />
                <h3 className="active-recipe-title">{recipe.strDrink}</h3>
                <h4>Ingredients:</h4>
                <ul className="active-details">
                    {ingredients.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
                <h4>Instructions:</h4>
                <ul className="active-details">
                    <li>{recipe.strInstructions}</li>
                </ul>
                <button className="active-recipe-button">
                    <Link to="/">Go Home</Link>{' '}
                </button>
            </div>
        </div>
    );
};
export default Recipe;

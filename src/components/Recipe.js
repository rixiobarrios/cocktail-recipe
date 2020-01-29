import React from 'react';
import { Link } from 'react-router-dom';

function RecipeInfo(recipe) {
    if (!recipe) {
        return null;
    }
    const ingredients = [];
    function getRecipeIngredients() {
        let i = 1;
        while (recipe['strIngredient' + i]) {
            const name = recipe['strIngredient' + i];
            const measurement = recipe['strMeasure' + i];
            ingredients.push(name + ' : ' + measurement);
            i++;
        }

        return ingredients;
    }
    getRecipeIngredients();
}
const Recipe = props => {
    const { recipe } = props.location.state;
    let ingredients = recipe.map(ingredient => RecipeInfo(ingredient));
    console.log(recipe);
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
                        Ingredients:{ingredients}
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

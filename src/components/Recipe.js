import React from 'react';
import { Link } from 'react-router-dom';
const Recipe = props => {
    const { recipe } = props.location.state;
    // function activeRecipe(obj) {
    //     if (obj !== null) {
    //         return true;
    //     }
    //     return false;
    // }

    let validIngredients = Object.entries(recipe).filter(ingredient => {
        return ingredient;
    });

    console.log(validIngredients);
    return (
        <div className="active-container">
            <div className="active-recipe-box">
                <img
                    className="active-recipe-img"
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink}
                />
                <h3 className="active-recipe-title">{recipe.strDrink}</h3>
                {/* <ul className="active-details">
                    <li>
                        Ingredients: {recipe.strIngredient1.strMeasure1}{' '}
                        {recipe.strIngredient2.strMeasure2 &&
                            recipe.strIngredient2.strMeasure2}{' '}
                        {recipe.strIngredient3.strMeasure3 &&
                            recipe.strIngredient3.strMeasure3}{' '}
                        {recipe.strIngredient4.strMeasure4 &&
                            recipe.strIngredient4.strMeasure4}{' '}
                        {recipe.strIngredient5.strMeasure5 &&
                            recipe.strIngredient5.strMeasure5}{' '}
                        {recipe.strIngredient6.strMeasure6 &&
                            recipe.strIngredient6.strMeasure6}{' '}
                        {recipe.strIngredient7.strMeasure7 &&
                            recipe.strIngredient7.strMeasure7}{' '}
                        {recipe.strIngredient8.strMeasure8 &&
                            recipe.strIngredient8.strMeasure8}{' '}
                        {recipe.strIngredient9.strMeasure9 &&
                            recipe.strIngredient7.strMeasure9}{' '}
                        {recipe.strIngredient10.strMeasure10 &&
                            recipe.strIngredient10.strMeasure10}{' '}
                        {recipe.strIngredient11.strMeasure11 &&
                            recipe.strIngredient7.strMeasure11}{' '}
                        {recipe.strIngredient12.strMeasure12 &&
                            recipe.strIngredient12.strMeasure12}{' '}
                        {recipe.strIngredient13.strMeasure13 &&
                            recipe.strIngredient13.strMeasure13}{' '}
                        {recipe.strIngredient14.strMeasure14 &&
                            recipe.strIngredient14.strMeasure14}{' '}
                        {recipe.strIngredient15.strMeasure15 &&
                            recipe.strIngredient15.strMeasure15}
                        <li>Instructions: {recipe.strInstructions} </li>
                    </li>
                </ul>
                ) */}
                <button className="active-recipe-button">
                    <Link to="/">Go Home</Link>{' '}
                </button>
            </div>
        </div>
    );
};
export default Recipe;

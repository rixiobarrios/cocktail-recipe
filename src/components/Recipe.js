import React from 'react';

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
                <p className="active-details">
                    {('Tags:', recipe.strTags)}{' '}
                    {('Category:', recipe.strCategory)}{' '}
                    {('IBA:', recipe.strIBA)}
                    {('Alcoholic:', recipe.strAlcoholic)}{' '}
                    {('Glass:', recipe.strGlass)}
                    {('Instructions:', recipe.strInstructions)}{' '}
                    {('Ingredients', recipe.strIngredient1)}
                </p>
            </div>
        </div>
    );
};
export default Recipe;

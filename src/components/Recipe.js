import React from 'react';

// const API_KEY = '1';

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    };

    componentDidMount = async () => {
        const strDrink = this.props.location.state.recipe;
        const req = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
        );
        const res = await req.json();
        this.setState({ activeRecipe: res.recipe });
        console.log('I am a recipe for the ', this.props.location.state.recipe);
    };

    render() {
        return <div>Recipe Component!</div>;
    }
}
export default Recipe;

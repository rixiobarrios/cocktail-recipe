import React from 'react';

const API_KEY = '1';

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    };

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${title}`
        );
        const res = await req.json();
        this.setState({ activeRecipe: res.recipes[0] });
        console.log(this.state.activeRecipe);
    };

    render() {
        return <div>Recipe Component!</div>;
    }
}

export default Recipe;

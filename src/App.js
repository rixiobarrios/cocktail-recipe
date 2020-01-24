import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

const API_KEY = '1';

class App extends Component {
    state = {
        recipes: []
    };
    getRecipe = async e => {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;
        const api_call = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
        );
        const data = await api_call.json();
        this.setState({ recipes: data.recipes });
        // console.log(data);
    };
    render() {
        const { recipes } = this.state;
        return (
            <div className="app">
                <header className="header">
                    <h1 className="title">Recipe Search</h1>
                </header>
                <Form getRecipe={this.getRecipe} />
                {recipes &&
                    recipes.length >= 1 &&
                    recipes.map(recipe => {
                        console.log(recipe);
                        return <p>{recipe}</p>;
                    })}
            </div>
        );
    }
}

export default App;

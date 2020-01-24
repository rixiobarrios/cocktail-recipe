import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

const API_KEY = '1'; //vendor API key

class App extends Component {
    state = {
        recipes: [] //empty array for new array
    };
    getRecipe = async e => {
        e.preventDefault(); //prevent default behaviour
        const recipeName = e.target.elements.recipeName.value;
        const api_call = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        );
        const data = await api_call.json();
        this.setState({ recipes: data.drinks }); // data pulled
        console.log(data.drinks);
    };
    render() {
        const { recipes } = this.state;
        return (
            <div className="app">
                <header className="header">
                    <h1 className="title">Recipe Search</h1>
                </header>
                <Form getRecipe={this.getRecipe} />
                {this.state.recipes.map(recipe => {
                    return <p key={recipe.idDrink}>{recipe.strDrink}</p>;
                })}
            </div>
        );
    }
}

export default App;

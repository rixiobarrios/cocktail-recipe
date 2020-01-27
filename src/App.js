import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '1'; //vendor API key

class App extends Component {
    state = {
        recipes: [],
        searchTerm: '' //empty array for new array
    };
    //<--- freeCodeCamp --->
    getRecipe = async e => {
        e.preventDefault(); //prevent default behaviour

        const api_call = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.searchTerm}`
        );
        const data = await api_call.json();
        this.setState({ recipes: data.drinks }); // data pulled
    };

    onChange = e => {
        this.setState({ searchTerm: e.target.value }); //dynamic searching
    };
    //<--- stack overflow --->
    render() {
        const { recipes } = this.state;
        return (
            <div className="app">
                <header className="app-header">
                    <img className="app-header-img" src="logo.svg" alt="logo" />
                    {/* <h1 className="app-title">Elixir: Drink Recipes</h1> */}
                </header>
                <Form getRecipe={this.getRecipe} onChange={this.onChange} />
                <Recipes recipes={this.state.recipes} />
            </div>
        );
    }
}

export default App;

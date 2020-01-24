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
            'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'
        );
        const data = await api_call.json();
        console.log(data);
    };
    render() {
        return (
            <div className="app">
                <header className="header">
                    <h1 className="title">Recipe Search</h1>
                </header>
                <Form getRecipe={this.getRecipe} />
            </div>
        );
    }
}

export default App;

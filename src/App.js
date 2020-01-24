import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
    getRecipe = e => {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;
        console.log('I am App');
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

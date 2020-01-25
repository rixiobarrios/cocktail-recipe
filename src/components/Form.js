import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input
            className="input"
            type="text"
            name="recipeName"
            onChange={props.onChange}
        />
        <button className="button">Search</button>
    </form>
);

export default Form;

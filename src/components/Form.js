import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input
            className="form-input"
            type="text"
            name="recipeName"
            onChange={props.onChange}
        />
        <button className="form-button">Search</button>
    </form>
);

export default Form;

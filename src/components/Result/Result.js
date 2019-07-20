import React from 'react';
import classes from './Result.css';

const Result = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  return (
    <div className={classes.Results}>
      <p>
        Amount: <strong>{Number.parseFloat(props.amount)} SEK</strong>
      </p>
    </div>
  );
};

export default Result;

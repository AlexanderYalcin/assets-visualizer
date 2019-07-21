import React from 'react';
import classes from './Result.css';

const Result = props => {
  const results = [];

  for (let resultName in props.results) {
    results.push({
      name: resultName,
      amount: props.results[resultName]
    });
  }

  return (
    <div className={classes.Results}>
      <p>
        Amount: <strong>{Number.parseFloat(props.amount)} SEK</strong>
      </p>
      <p>{props.date}</p>
    </div>
  );
};

export default Result;

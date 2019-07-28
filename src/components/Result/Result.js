import React from 'react';
import classes from './Result.css';

const Result = props => {
  const results = [];

  for (let resultName in props.results) {
    results.push({
      name: resultName,
      note: props.results[resultName],
      amount: props.results[resultName]
    });
  }

  return (
    <div className={classes.ResultsOuter}>
      <div className={classes.Results}>
        <p>{props.date}</p>
        <p>
          Amount: <strong>{Number.parseFloat(props.amount)} SEK</strong>
        </p>
        {props.note ? <p>
          Note: <strong>{props.note}</strong>
        </p> : ''}
      </div>
    </div>
  );
};

export default Result;

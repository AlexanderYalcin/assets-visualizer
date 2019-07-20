import React from 'react';

const ResultSum = props => {
  let total = 0;
  for (let i = 0; i < props.fetchedResults.length; i++) {
    total += parseInt(props.fetchedResults[i].amount);
  }

  return <h1>Total: {total} SEK</h1>;
};

export default ResultSum;
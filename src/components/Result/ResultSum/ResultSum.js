import React, { Component } from 'react';
import DeleteAllResults from '../DeleteAllResults/DeleteAllResults';
import classes from './ResultSum.css';

export default class ResultSum extends Component {
  render() {
    let total = 0;
    for (let i = 0; i < this.props.fetchedResults.length; i++) {
      total += parseInt(this.props.fetchedResults[i].amount);
    }

    return (
      <div className={classes.Total}>
        <div className={classes.TotalEmpty}>
          {total > 0 ? (
            <p>
              Total: <strong>{total}</strong> SEK
            </p>
          ) : (
            <small>Your results is empty!</small>
          )}
        </div>
        {total > 0 ? <DeleteAllResults /> : ''}
      </div>
    );
  }
}

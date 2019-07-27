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
      <div className={classes.Total} >
        <p>
          Total: <strong>{total}</strong> SEK
        </p>
        {total > 0 ? <DeleteAllResults /> : ''}
      </div>
    );
  }
}

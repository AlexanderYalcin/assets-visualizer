import React, { Component } from 'react';
import classes from './Result.css';
import axios from '../../axios-orders';

class Result extends Component {
  deleteSingleResult = () => {
    if (window.confirm('Are you sure you want to delete this result?') === false) {
      return;
    }
    axios.delete(`/assets/${this.props.id}.json`).then(() => {
      window.location.reload();
    });
  };

  render() {
    const results = [];

    for (let resultName in this.props.results) {
      results.push({
        name: resultName,
        note: this.props.results[resultName],
        amount: this.props.results[resultName]
      });
    }

    return (
      <div onClick={this.deleteSingleResult} className={classes.ResultsOuter}>
        <div className={classes.Results}>
          <p>{this.props.date}</p>
          <p>
            Amount: <strong>{Number.parseFloat(this.props.amount)} SEK</strong>
          </p>
          {this.props.note ? (
            <p>
              Note: <strong>{this.props.note}</strong>
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default Result;

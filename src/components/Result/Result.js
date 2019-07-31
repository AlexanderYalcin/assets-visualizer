import React, { Component } from 'react';
import classes from './Result.css';
import DeleteSingleResult from './DeleteSingleResult/DeleteSingleResult';

class Result extends Component {
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
      <div className={classes.ResultsOuter}>
        <div className={classes.Results}>
          <div>
            <p>{this.props.date}</p>
            <p>
              Amount:{' '}
              <strong>{Number.parseFloat(this.props.amount)} SEK</strong>
            </p>
            {this.props.note ? (
              <p>
                Note: <strong>{this.props.note}</strong>
              </p>
            ) : (
              ''
            )}
          </div>
          <DeleteSingleResult resultId={this.props.id} />
        </div>
      </div>
    );
  }
}

export default Result;

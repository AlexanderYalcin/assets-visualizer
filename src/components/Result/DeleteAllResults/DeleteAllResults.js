import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import axios from '../../../axios-orders';
import classes from './DeleteAllResults.css';

export default class ResultDeleteAll extends Component {
  deleteAllResultsHandler = () => {
    if (window.confirm('Are you sure you wish to delete all your results?') === false) {
      return;
    }
    axios.delete('/assets.json').then(x => {
      window.location.reload();
    });
  };

  render() {
    return (
      <Aux>
        <button
          className={classes.DeleteAllButton}
          onClick={this.deleteAllResultsHandler}
        >
          Delete All
        </button>
      </Aux>
    );
  }
}

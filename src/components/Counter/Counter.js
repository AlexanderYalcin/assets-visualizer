import React, { Component } from 'react';
import classes from './Counter.css';
import Form from './Form/Form';

export default class Counter extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Counter}>
          <div>
            <h2>Visualize your monthly savings</h2>
            <p>
              Visualize how much you're saving each month and get a page with
              detailed information, total amount saved so far, etc.
            </p>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

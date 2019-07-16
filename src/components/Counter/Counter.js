import React, { Component } from 'react';

import classes from './Counter.css';

export default class Counter extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    console.log(this.changed);
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
          <form className={classes.Form}>
            <p>Enter your savings amount for this month</p>
            <input
              type="text"
              onChange={this.props.changed}
              ref={inputEl => {
                this.inputElement = inputEl;
              }}
              className={classes.Input}
            />
          </form>
        </div>
      </div>
    );
  }
}

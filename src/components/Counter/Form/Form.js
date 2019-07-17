import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Form.css';

export default class Form extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  sendAmount = async e => {
    e.preventDefault();
  };

  render() {
    return (
      <Aux>
        <form onSubmit={this.sendAmount} className={classes.Form}>
          <p>Enter your savings amount for this month</p>
          <input
            type="text"
            onChange={this.changed}
            placeholder="123..."
            className={classes.Input}
            ref={inputEl => {
              this.inputElement = inputEl;
            }}
          />
          <button className={classes.Button}>Send Amount</button>
        </form>
      </Aux>
    );
  }
}

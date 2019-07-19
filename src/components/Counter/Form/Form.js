import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Form.css';
import axios from '../../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class Form extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.inputElement.focus();
  }

  amountHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const result = { amount: event.target.amount.value };

    axios
      .post('/assets.json', result)
      .then(response => {
        this.setState({ loading: false });
      })
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form onSubmit={this.amountHandler} className={classes.Form}>
        <p>Enter your savings amount for this month</p>
        <input
          type="number"
          name="amount"
          placeholder="123..."
          className={classes.Input}
          ref={inputEl => {
            this.inputElement = inputEl;
          }}
        />
        <button className={classes.Button}>Send Amount</button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return <Aux>{form}</Aux>;
  }
}

export default withErrorHandler(Form, axios);

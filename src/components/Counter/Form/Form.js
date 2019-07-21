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

  dateCreator = () => {
    const currentDate = new Date();
    const dateTime =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear();

    return dateTime;
  };

  amountHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    let result = {
      amount: event.target.amount.value,
      date: this.dateCreator()
    };

    let reg = new RegExp('(^[1-9][0-9]*$)');
    if (reg.test(result.amount)) {
      axios
        .post('/assets.json', result)
        .then(response => {
          this.setState({ loading: false });
        })
        .catch(error => this.setState({ loading: false }));
    } else {
      alert('Bad input'); //Temporary
      this.setState({ loading: false });
    }
  };

  render() {
    let form = (
      <form onSubmit={this.amountHandler} className={classes.Form}>
        <p>Enter your savings amount for this month</p>
        <input
          name="amount"
          type="number"
          min="1"
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

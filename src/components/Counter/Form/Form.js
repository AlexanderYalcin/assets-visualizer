import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Form.css';
import axios from '../../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';
import SnackBar from './SnackBar/SnackBar';

class Form extends Component {
  state = {
    loading: false,
    snackbarOpen: false,
    snackbarMsg: '',
    snackbarVariant: 'success'
  };

  getCurrentDate = () => {
    const currentDate = new Date();
    const dateTime =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear();

    return dateTime;
  };

  sumbitHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    let result = {
      amount: event.target.amount.value,
      date: this.getCurrentDate()
    };

    let reg = new RegExp('(^[1-9][0-9]*$)');
    if (reg.test(result.amount)) {
      axios
        .post('/assets.json', result)
        .then(response => {
          this.setState({
            snackbarOpen: true,
            snackbarVariant: 'success',
            snackbarMsg: 'Successfully sent',
            loading: false
          });
        })
        .catch(error =>
          this.setState({
            snackbarOpen: true,
            snackbarVariant: 'error',
            snackbarMsg: error.message,
            loading: false
          })
        );
    } else {
      this.setState({
        snackbarOpen: true,
        snackbarVariant: 'warning',
        snackbarMsg: 'Invalid input!',
        loading: false
      });
    }
  };

  snackbarCloseHandler = () => {
    this.setState({ snackbarOpen: false });
  };

  render() {
    let form = (
      <div>
        <div className={classes.AmountTextDiv} >
          <span>Enter your savings amount for this month</span>
        </div>
        <form onSubmit={this.sumbitHandler} className={classes.Form}>
          <input
            name="amount"
            type="number"
            min="1"
            placeholder="123..."
            className={classes.Input}
          />
          <button className={classes.Button}>Send Amount</button>
        </form>
        <SnackBar
          variant={this.state.snackbarVariant}
          message={this.state.snackbarMsg}
          open={this.state.snackbarOpen}
          onClose={this.snackbarCloseHandler}
        />
      </div>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return <Aux>{form}</Aux>;
  }
}

export default Form;

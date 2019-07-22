import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Form.css';
import axios from '../../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

class Form extends Component {
  state = {
    loading: false,
    snackbarOpen: false,
    snackbarMsg: ''
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

  handleClose = () => {
    this.setState({ snackbarOpen: false });
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
            snackbarMsg: 'Successfully sent',
            loading: false
          });
        })
        .catch(error => this.setState({ loading: false }));
    } else {
      alert('Bad input'); //Temporary
      this.setState({ loading: false });
    }
  };

  render() {
    let form = (
      <Aux>
        <form onSubmit={this.sumbitHandler} className={classes.Form}>
          <p>Enter your savings amount for this month</p>
          <input
            name="amount"
            type="number"
            min="1"
            placeholder="123..."
            className={classes.Input}
          />
          <button className={classes.Button}>Send Amount</button>
        </form>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={this.state.snackbarOpen}
          autoHideDuration={1500}
          onClose={this.handleClose}
          message={<span id="message-id">{this.state.snackbarMsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="close"
              color='inherit'
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Aux>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return <Aux>{form}</Aux>;
  }
}

export default withErrorHandler(Form, axios);

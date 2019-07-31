import React from 'react';
import classes from './DeleteSingleResult.css';
import axios from '../../../axios-orders';

const DeleteSingleResult = props => {
  let deleteSingleResult = () => {
    if (
      window.confirm('Are you sure you want to delete this result?') === false
    ) {
      return;
    }
    axios.delete(`/assets/${props.resultId}.json`).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className={classes.DeleteButton}>
      <button onClick={deleteSingleResult}>X</button>
    </div>
  );
};

export default DeleteSingleResult;

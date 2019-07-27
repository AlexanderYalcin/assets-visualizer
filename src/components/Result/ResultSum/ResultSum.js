import React, { Component } from 'react';
import DeleteAllResults from '../DeleteAllResults/DeleteAllResults';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

export default class ResultSum extends Component {
  render() {
    let total = 0;
    for (let i = 0; i < this.props.fetchedResults.length; i++) {
      total += parseInt(this.props.fetchedResults[i].amount);
    }

    return (
      <div>
        <Aux>
          <p>
            Total: <strong>{total}</strong> SEK
          </p>
          {total > 0 ? <DeleteAllResults /> : ''}
        </Aux>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Result from '../../components/Result/Result';
import ResultSum from '../../components/ResultSum/ResultSum'

class Results extends Component {
  state = {
    results: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get('/assets.json')
      .then(res => {
        const fetchedResults = [];
        for (let key in res.data) {
          fetchedResults.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, results: fetchedResults });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Aux>
        <div>
          {this.state.results.map(result => (
            <Result key={result.id} amount={result.amount} />
          ))}
        </div>
        <div>
          <ResultSum fetchedResults={this.state.results} />
        </div>
      </Aux>
    );
  }
}

export default withErrorHandler(Results, axios);

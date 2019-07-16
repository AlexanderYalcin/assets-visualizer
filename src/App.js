import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import AssetsCounter from './containers/AssetsCounter/AssetsCounter';
import Results from './containers/Results/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={AssetsCounter} />
            <Route path="/results" component={Results} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

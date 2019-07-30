import React, { Component } from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
  render() {
    return (
      <ul onClick={this.props.clicked} className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
          Assets Counter
        </NavigationItem>
        <NavigationItem link="/results">Results</NavigationItem>
      </ul>
    );
  }
}

export default NavigationItems;

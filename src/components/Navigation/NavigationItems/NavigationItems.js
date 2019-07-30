import React, { Component } from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
  closeDrawerHandler = () => {
    return this.props.clicked();
  }

  render() {
    return (
      <ul onClick={this.closeDrawerHandler} className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
          Assets Counter
        </NavigationItem>
        <NavigationItem link="/results">Results</NavigationItem>
      </ul>
    );
  }
}

export default NavigationItems;

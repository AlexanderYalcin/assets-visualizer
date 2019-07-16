import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Assets Counter</NavigationItem>
      <NavigationItem link="/results">Results</NavigationItem>
    </ul>
  );
};

export default NavigationItems;

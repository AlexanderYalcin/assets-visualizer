import React from 'react';

import moneyLogo from '../../assets/images/money-counter.png';
import classes from './Logo.css'

const Logo = props => {
  return (
    <div className={classes.Logo} >
      <img src={moneyLogo} alt="MoneyCounter" />
    </div>
  );
};

export default Logo;

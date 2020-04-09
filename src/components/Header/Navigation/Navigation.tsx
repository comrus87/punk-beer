import React from 'react';
import classes from './Navigation.module.scss';

function Navigation() {
  return (
    <ul className={classes.list}>
      <li className={classes.item}><a href="#">Главная</a></li>
      <li className={classes.item}><a href="#">Избранное</a></li>
    </ul>
  );
}

export default Navigation;
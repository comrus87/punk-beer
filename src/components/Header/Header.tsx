import React from 'react';
import classes from './Header.module.scss';
import logo from './../../img/logo-beer.png';
import Navigation from './Navigation/Navigation';

function Header() {
  return (
      <header className={classes.header}>
        <div className={classes.wrap}>
          <h1 hidden>Пивотека</h1>
          <div className={classes.titleContainer}>
            <div className={classes.logo}>
              <img src={logo} alt="Логотип Пивотеки" />
            </div>
            <p className={classes.description}>Коллекция крафтовых сортов пива</p>
          </div>
          <Navigation />
        </div>
      </header>
  );
}

export default Header;
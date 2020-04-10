import React from 'react';
import classes from './Gallery.module.scss';
import BeerItem from './BeerItem/BeerItem';

function Gallery() {
  return (
        <section className={classes.gallery}>
          <h2 className={classes.title}>Наша галерея:</h2>
          <ul className={classes.list}>
            <BeerItem />
            <BeerItem />
            <BeerItem />
            <BeerItem />
          </ul>
        </section>
  );
}

export default Gallery;

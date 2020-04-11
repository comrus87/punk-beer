import React from 'react';
import classes from './Gallery.module.scss';
import BeerItem from './BeerItem/BeerItem';
import {BeerType} from './../../redux/types/types';

type PropsType = {
  beers: Array<BeerType>
}

const Gallery: React.FC<PropsType> = props => {
        console.log(props);
  return (
        <section className={classes.gallery}>
          <h2 className={classes.title}>Наша галерея:</h2>
          <ul className={classes.list}>

            {props.beers.map(b => <BeerItem key={b.id}
                imageUrl={b.image_url}
                name={b.name}
                abv={b.abv}
                ibu={b.ibu}
                ebc={b.ebc}
                description={b.description}
              />)
            }
          </ul>
        </section>
  );
}

export default Gallery;

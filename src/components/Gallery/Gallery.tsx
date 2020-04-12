import React from 'react';
import classes from './Gallery.module.scss';
import BeerItem from './BeerItem/BeerItem';
import {BeerType} from './../../redux/types/types';
import Pagination from './Pagination/Pagination';

type PropsType = {
  beers: Array<BeerType>,
  totalBeers: number,
  pageSize: number,
  portialSize: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void
}

const Gallery: React.FC<PropsType> = props => {
  return (
        <section className={classes.gallery}>
          <h2 className={classes.title}>Наша галерея:</h2>
          <div>
            <Pagination totalBeers={props.totalBeers} 
                        pageSize={props.pageSize}
                        portialSize={props.portialSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}
            />
            <input type="text"/>
          </div>
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

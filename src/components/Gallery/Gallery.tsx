import React from 'react';
import classes from './Gallery.module.scss';
import BeerItem from './BeerItem/BeerItem';
import {BeerType} from './../../redux/types/types';
import Pagination from './Pagination/Pagination';
import Search from './Search/Search';

type PropsType = {
  beers: Array<BeerType>,
  totalBeers: number,
  pageSize: number,
  portialSize: number,
  currentPage: number,
  isSearchMode: boolean,
  onPageChanged: (pageNumber: number) => void,
  onPageSearch: (value: string) => void
}

const Gallery: React.FC<PropsType> = props => {

  let arrBeers;

  if (props.beers.length > props.pageSize) {
    arrBeers = props.beers.slice((props.pageSize * props.currentPage - props.pageSize), props.pageSize * props.currentPage);
  } else {
    arrBeers = props.beers;
  }

  console.log(arrBeers);

  return (
        <section className={classes.gallery}>
          <h2 className={classes.title}>Наша галерея:</h2>
          <div className={classes.searchWrap}>
              <Pagination totalBeers={props.totalBeers} 
                          pageSize={props.pageSize}
                          portialSize={props.portialSize}
                          currentPage={props.currentPage}
                          onPageChanged={props.onPageChanged}
                          isSearchMode={props.isSearchMode}
                          beersCount={props.beers.length}
              />


            <Search onPageSearch={props.onPageSearch} />
          </div>
          <ul className={classes.list}>
            {arrBeers.map(b => <BeerItem key={b.id}
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

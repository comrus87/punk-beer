import React from 'react';
import classes from './Pagination.module.scss';

type PropsType = {
  totalBeers: number, 
  pageSize: number, 
  currentPage:  number, 
  portialSize: number,
  isSearchMode: boolean,
  beersCount: number,
  onPageChanged: (pageNumber: number) => void,
  portionNumber: number,
  setPortionNumber: (portionNumber: number) => void
}

const Pagination: React.FC<PropsType> = props => {
 
    const totalBeers = props.isSearchMode ? props.beersCount : props.totalBeers;

    const countPage = Math.ceil(totalBeers/props.pageSize);
    const portionCount = Math.ceil(countPage/props.portialSize);

    const setPortionNumberPrev = function() {
      if (props.portionNumber > 1) {
       props.setPortionNumber(props.portionNumber - 1)
      }
    }

    const setPortionNumberNext = function() {
      if (props.portionNumber < portionCount) {
        props.setPortionNumber(props.portionNumber + 1);
      }
    }

    const leftPortionNumber = (props.portionNumber - 1) * props.portialSize + 1;
    const rightPortionNumber = props.portionNumber * props.portialSize;

    const pages: Array<number> = [];

    for (let i=1; i <= countPage; i++) {
      pages.push(i)
    }

    return (
          <div className={classes.container}>
            <button className={props.portionNumber === 1 
              ? classes.btn + ' ' + classes.btnPrev + ' ' + classes.btnDisabled
              : classes.btn + ' ' + classes.btnPrev} 
              onClick={setPortionNumberPrev}> Prev </button>

            <div className={classes.containerCount}>
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                  .map((page, index) => {
                    return <span className={props.currentPage === page 
                      ? classes.countPage + ' ' + classes.currentPage 
                      : classes.countPage}
                      onClick={evt => props.onPageChanged(page)} key={index}> {page} </span>
                    })
            }
            </div>

            <button className={props.portionNumber >= portionCount
              ? classes.btn + ' ' + classes.btnNext + ' ' + classes.btnDisabled
              : classes.btn + ' ' + classes.btnNext} 
              onClick={setPortionNumberNext}> Next </button>

          </div>
        )
}

export default Pagination;

import React, {useState} from 'react';
import classes from './Pagination.module.scss';

type PropsType = {
  totalBeers: number, 
  pageSize: number, 
  currentPage:  number, 
  portialSize: number, 
  onPageChanged: (pageNumber: number) => void
}

const Pagination: React.FC<PropsType> = props => {

    let countPage = Math.ceil(props.totalBeers/props.pageSize);
    let portionCount = Math.ceil(countPage/props.portialSize);

    let [portionNumber, setPortionNumber] = useState(1);

    const setPortionNumberPrev = function() {
      if (portionNumber > 1) {
       setPortionNumber(portionNumber - 1)
      }
    }

    const setPortionNumberNext = function() {
      if (portionNumber < portionCount) {
        setPortionNumber(portionNumber + 1);
      }
    }

    let leftPortionNumber = (portionNumber - 1) * props.portialSize + 1;
    let rightPortionNumber = portionNumber * props.portialSize;

    let pages: Array<number> = [];

    for (let i=1; i <= countPage; i++) {
      pages.push(i)
    }

    return (
          <div className={classes.container}>
            <button className={portionNumber === 1 
              ? classes.btn + ' ' + classes.btnPrev + ' ' + classes.btnDisabled
              : classes.btn + ' ' + classes.btnPrev} 
              onClick={setPortionNumberPrev}> Prev </button>

            <div className={classes.containerCount}>
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                  .map((page, index) => {
                    return <span className={props.currentPage === page 
                      ? classes.countPage + ' ' + classes.currentPage 
                      : classes.countPage}
                      onClick={(evt) => props.onPageChanged(page)} key={index}> {page} </span>
                    })
            }
            </div>

            <button className={portionNumber >= portionCount
              ? classes.btn + ' ' + classes.btnNext + ' ' + classes.btnDisabled
              : classes.btn + ' ' + classes.btnNext} 
              onClick={setPortionNumberNext}> Next </button>

          </div>
        )
}

export default Pagination;

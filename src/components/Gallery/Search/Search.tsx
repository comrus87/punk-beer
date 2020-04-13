import React, {useState} from 'react';
import classes from './Search.module.scss';

type PropsType = {
  onPageSearch: (value: string) => void
}

const Search: React.FC<PropsType> = props => {

  let [searchValue, setSearchValue] = useState('');

  return (
    <div className={classes.container}>
      <input className={classes.inputSearch} 
      			 type="text" 
      			 placeholder="Поиск" 
      			 onChange={evt => setSearchValue(evt.target.value)} 
      			 value={searchValue} />
      <button className={classes.btn} 
      				type="button" aria-label="Найти" 
      				onClick={() => props.onPageSearch(searchValue)}>
      </button>
    </div>
  );
}

export default Search;
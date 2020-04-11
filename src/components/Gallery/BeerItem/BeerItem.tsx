import React from 'react';
import classes from './BeerItem.module.scss';
import {BeerType} from './../../../redux/types/types';

type PropsType = {
  imageUrl: string,
  name: string,
  abv: number,
  ibu: number,
  ebc: number,
  description: string
}

const BeerItem: React.FC<PropsType> = props => {
	return (
		<li className={classes.item}>
			<a>
				<div className={classes.imageContainer}>
					<img src={props.imageUrl} alt="Пиво" />
				</div>
				<h3 className={classes.titelBeer}>{props.name}</h3>
				<div className={classes.parametrContainer}>
					<span>abv: {props.abv}</span>
					<span>ibu: {props.ibu}</span>
					<span>ebc: {props.ebc}</span>
				</div>
				<p className={classes.description}>
					{props.description}
				</p>
			</a>
		</li>
	)
		
}

export default BeerItem
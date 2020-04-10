import React from 'react';
import classes from './BeerItem.module.scss';


const BeerItem = () => {
	return (
		<li className={classes.item}>
			<a>
				<div className={classes.imageContainer}>
					<img src="https://images.punkapi.com/v2/154.png" />
				</div>
				<h3 className={classes.titelBeer}>Punk IPA 2007 - 2010</h3>
				<div className={classes.parametrContainer}>
					<span>abv: 6.0</span>
					<span>ibu: 60.0</span>
					<span>ebc: 17.0</span>
				</div>
				<p className={classes.description}>Our flagship beer that kick started the craft beer revolution. 
					This is James and Martin's original take on an American IPA, 
					subverted with punchy New Zealand hops. Layered with new world 
					hops to create an all-out riot of grapefruit, pineapple and lychee 
					before a spiky, mouth-puckering bitter finish.
				</p>
			</a>
		</li>
	)
		
}

export default BeerItem
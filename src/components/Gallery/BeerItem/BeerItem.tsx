import React from 'react';
import classes from './BeerItem.module.scss';

type PropsType = {
	text: string
}

const BeerItem = (props: PropsType) => {
	return (
		<li className={classes.item}>{props.text}
			<a>
			</a>
		</li>
	)
		
}

export default BeerItem
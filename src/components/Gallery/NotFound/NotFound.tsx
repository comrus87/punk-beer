import React from 'react';
import classes from './NotFound.module.scss';
import sid from './../../../img/sid.png';

const NotFound = () => {
	return (
		<div className={classes.container}>
			<p className={classes.title}>Упс! По вашему запросу ничего не найдено....</p>
			<img className={classes.picture} src={sid} alt="Сид" />
		</div>
	)
		
}

export default NotFound
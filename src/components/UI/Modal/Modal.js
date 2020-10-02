import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {

	const modalState = props.show ? classes.Show : classes.Hide;

	return (
		<div className={classes.Modal + ' ' + modalState}>
			{props.children}
		</div>
	);
}

export default modal;
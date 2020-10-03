import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {

	let modalState = props.show ? classes.Show : classes.Hide;

	return (
		<>
			<Backdrop show={props.show} />
			<div className={classes.Modal + ' ' + modalState}>
				{props.children}
			</div>
		</>
	);
}

export default modal;
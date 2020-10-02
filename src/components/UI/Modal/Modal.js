import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {

	let modalState = '';
	const showModal = classes.Show
	const hideModal = classes.Hide

	if (props.show === true) {
		modalState = {showModal};
	}
	else {
		modalState = {};
	}

	return (
		<div className={classes.Modal} style={{
			transform: props.show ? 'translateY(0)' : 'translateY(-1vh)',
			opacity: props.show ? '1' : '0'
		}}>
			{props.children}
		</div>
	);
}

export default modal;
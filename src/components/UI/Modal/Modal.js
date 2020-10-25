import React, {Fragment, memo} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {

	console.log('Modal updated');

	let modalState = props.show ? classes.Show : classes.Hide;

	return (
		<Fragment>
			<Backdrop show={props.show} />
			<div className={classes.Modal + ' ' + modalState}>
				{props.children}
			</div>
		</Fragment>
	);
}

const shouldUpdate = (prevProps, nextProps) => {
	return prevProps.show === nextProps.show;
}

export default memo(Modal, shouldUpdate);
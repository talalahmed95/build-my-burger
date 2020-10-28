import React, {Component, Fragment} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

	shouldComponentUpdate(nextProps) {
		return nextProps.show !== this.props.show || nextProps.loading !== this.props.loading;
	}

	render() {
		console.log('Modal runs');

		let modalState = this.props.show ? classes.Show : classes.Hide;

		return (
			<Fragment>
				<Backdrop show={this.props.show} />
				<div className={classes.Modal + ' ' + modalState}>
					{this.props.children}
				</div>
			</Fragment>
		);
	}
}

export default Modal;
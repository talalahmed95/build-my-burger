import React from 'react';
// import classes from './ErrorMessage.module.css';
import Button from '../../UI/Button/Button';

const ErrorMessage = (props) => {
	const errorMsg = 'Oops! An error occured! (' + String(props.error) + ')';
	return (
		<>
			{errorMsg}
			<div>
				<Button btnType="Danger" clicked={props.closeModal}>CLOSE</Button>
			</div>
		</>
	);
}

export default ErrorMessage;
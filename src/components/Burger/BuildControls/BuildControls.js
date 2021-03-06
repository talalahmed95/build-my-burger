import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Egg', type: 'egg' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }	
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>Price: Rs. <strong>{props.price}</strong></p>
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label} 
				added={() => props.ingredientsAdded(ctrl.type)}
				removed={() => props.ingredientsRemoved(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button className={classes.OrderBtn} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
	</div>
);

export default buildControls;
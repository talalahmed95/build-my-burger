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
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label} 
				added={() => props.ingredientsAdded(ctrl.type)}
			/>
		))}
	</div>
);

export default buildControls;
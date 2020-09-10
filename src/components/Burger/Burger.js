import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	const transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
		return [...Array(props.ingredients[ingKey])].map((_, i) => {
			return <BurgerIngredient key={ingKey + i} type={ingKey} />
		});
	});

	// Object.keys converts keys into array, and map on each element of array. 
	// props.ingredients[ingKey] is the value like 1,2 and [...Array] converts it into array of values [1,1,2,2]
	// _ is empty length, i is index i.e 0 and 1

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div> 
	);
}

export default burger;
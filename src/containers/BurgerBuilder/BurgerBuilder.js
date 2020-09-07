import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient'

class BurgerBuilder extends Component {
	render () {
		return (
			<Aux>
				<div><BurgerIngredient /></div>
				<div>Build Controls</div>
			</Aux>
		);
	}
}

export default BurgerBuilder;
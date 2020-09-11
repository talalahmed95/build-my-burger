import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 10,
	egg: 15,
	cheese: 10,
	meat: 30
}

class BurgerBuilder extends Component {
	state = {
		ingredients : {
			salad: 0,
			egg: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 5
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = updatedCount;
		const priceAdd = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const updatedPrice = priceAdd + oldPrice;
		this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
	}

	removeIngredientHandler = (type) => {

	}

	render () {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls ingredientsAdded={this.addIngredientHandler} />
			</Aux>
		);
	}
}

export default BurgerBuilder;
import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
		totalPrice: 5,
		purchasable: false,
		purchasing: false
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
		this.orderBtnToggleHandler(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = updatedCount;
		const priceSub = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice - priceSub;
		this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
		this.orderBtnToggleHandler(updatedIngredients);
	}

	orderBtnToggleHandler = (ingredients) => {
		const sum = Object.keys(ingredients).map((igKey) => {
			return ingredients[igKey];
		})
		.reduce((sum, el) => {
			return sum + el;
		});

		this.setState( { purchasable: sum > 0 } );
	}

	purchasingHandler = () => {
		this.setState({purchasing: true});
	}

	purchasingCancelHandler = () => {
		this.setState({purchasing: false});
	}

	purchasingContinueHandler = () => {
		alert("You have purchased!");
	}

	render () {
		const disabledInfo = {...this.state.ingredients};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing}>
					<OrderSummary ingredients={this.state.ingredients} 
						continuePurchasing={this.purchasingContinueHandler}
						cancelPurchasing={this.purchasingCancelHandler} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls 
					ingredientsAdded={this.addIngredientHandler}
					ingredientsRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchasingHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
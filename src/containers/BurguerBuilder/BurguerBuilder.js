import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICES = {
    salad: 2,
    cheese: 1,
    bacon: 1,
    meat: 3
}

class BurguerBuilder extends Component {
    state  = {
        ingredients: {
            meat: 0,
            salad: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(ingreKey => {
            return ingredients[ingreKey];
        }).reduce((acc, nextValue) => {
            return acc + nextValue;
        })
        this.setState({ purchasable: sum > 0 }) 
    }

    addIngredientHandler = (type) => {
        this.addRemoveIngredient(type, '+');   
    }

    removeIngredientHandler = (type) => {
        this.addRemoveIngredient(type, '-');
    }

    addRemoveIngredient(type, operation) {
        let count = this.state.ingredients[type];
        const updatedIngredients = { ...this.state.ingredients };
        let total = this.state.totalPrice;
        if (operation === '+') {
            count += 1;
            total += INGREDIENTS_PRICES[type];
            
        } else if (operation === '-' && count > 0){
            count -= 1;
            total -= INGREDIENTS_PRICES[type];
        }
        updatedIngredients[type] = count;
        this.setState({ ingredients: updatedIngredients, totalPrice: total });
        this.updatePurchaseState(updatedIngredients );
    }

    render() {
        return (
            <Aux>
                <Modal>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                     />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                 />
            </Aux>
        )
    }
}

export default BurguerBuilder;
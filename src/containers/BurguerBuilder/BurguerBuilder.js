import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENTS_PRICES = {
    salad: 2,
    cheese: 1,
    bacon: 1,
    meat: 4
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
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler} />
            </Aux>
        )
    }
}

export default BurguerBuilder;
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurguerBuilder extends Component {
    state  = {
        ingredients: {
            meat: 0,
            salad: 0,
            bacon: 0,
            cheese: 1
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        )
    }
}

export default BurguerBuilder;
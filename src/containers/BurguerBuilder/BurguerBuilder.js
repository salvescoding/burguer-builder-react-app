import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurguerBuilder extends Component {
    state  = {
        ingredients: {
            meat: 1,
            salad: 0,
            bacon: 0,
            cheese: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
            </Aux>
        )
    }
}

export default BurguerBuilder;
import React from 'react';
import Aux from '../../../hoc/Aux';


const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map( ingredient => {
        return ( 
            <li> 
                <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
            </li>
        )
    })

    return (
        <Aux>
            <h3>Your order details</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Total price: {props.totalPrice}$</p>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default orderSummary;
import React from 'react';
import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [ 
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total prie: {props.price}$</p>
        {controls.map( c => (
            <BuildControl 
                key={c.label} 
                label={c.label}
                removeIngredient={() => props.removeIngredient(c.type)}
                addIngredient={() => props.addIngredient(c.type)} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
         >Order Now</button>
    </div>
);

export default buildControls;
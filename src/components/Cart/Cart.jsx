/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css';

const Cart = ({selectedActors,totalCost,remainning}) => {
    console.log(selectedActors)
    return (
        <div>
            <h2>This is actors cart</h2>
            <h3>Total Actors:{selectedActors.length}</h3>
            <h5>Total cost:{totalCost} </h5>
            <h5>Remainnig amount:{remainning}</h5>
            {
                selectedActors.map((actor, idx) => (
                    <li key={idx} > {actor.name} </li>
                ))
            }
        </div>
    );
};

export default Cart;
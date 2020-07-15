import React from 'react';
import './CartDropdown.css';

const cartDropdown = (props) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                <button>Go to checkout</button>
            </div>
        </div>
    );
}

export default cartDropdown;
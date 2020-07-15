import React from 'react';
import './Carticon.css';
import { ReactComponent as ShoppingIcon } from '../../../assets/images/shopping-bag.svg';
import { toggleCartHidden } from '../../../Redux/Cart/cart.action';
import { connect } from 'react-redux';


const cartIcon = ({ toggleCartHidden }) => (
    <div className ="cart-icon">
        <button onClick={toggleCartHidden}><span className='item-count'>0</span><ShoppingIcon className="shopping-icon"/></button>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null,mapDispatchToProps)(cartIcon);
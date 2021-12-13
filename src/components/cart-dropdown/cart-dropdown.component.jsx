import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'




const CartDropdown = ({cartItems, dispatch}) => {
    const  navigate = useNavigate();
    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        
        {
            
            // ternary Operator
            cartItems.length
            ?

            cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} />
        ))
            :
        (<span className='empty-message'>Your cart is empty</span>)
        }

        </div>
        
        <CustomButton onClick={() =>{ 
            navigate(`/checkout`);
            dispatch(toggleCartHidden());
        }}>
        Go TO CHECKOUT</CustomButton>
        
    </div>
);
    };



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);

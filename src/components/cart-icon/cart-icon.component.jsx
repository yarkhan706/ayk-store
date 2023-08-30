import './cart-icon.styles.scss'
import {ReactComponent as ShoppingCart} from '../../assets/shopCart.svg'
import { useState , useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = () =>
{
    const {isCartOpen,setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingCart className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;
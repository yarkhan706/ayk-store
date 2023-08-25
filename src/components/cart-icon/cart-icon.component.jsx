import './cart-icon.styles.scss'
import {ReactComponent as ShoppingCart} from '../../assets/shopCart.svg'

const CartIcon = () =>
{
    return(
        <div className='cart-icon-container'>
            <ShoppingCart className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;
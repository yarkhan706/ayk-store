import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";



const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigate();
  const navigateToCheckoutHandler = () => {
    navigation('/checkout');
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={navigateToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;

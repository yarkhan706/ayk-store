import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext, useEffect } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">PRODUCT</div>
        <div className="header-block">DESCRIPTION</div>
        <div className="header-block">QUANTITY</div>
        <div className="header-block">PRICE</div>
        <div className="header-block">REMOVE</div>
      </div>

      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartitem={item} />
      ))}
      <span className="total">Total: 0</span>
    </div>
  );
};

export default CheckOut;

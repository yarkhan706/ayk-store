import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext, useEffect } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartitem={item} />
      ))}
      <span className="total">Total: {`${cartTotal}`}$</span>
    </div>
  );
};

export default CheckOut;

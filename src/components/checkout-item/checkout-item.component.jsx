import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";

const CheckOutItem = ({ cartitem }) => {
  const { name, imageUrl, price, quantity } = cartitem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const cartItemToClearHandler = () => clearItemFromCart(cartitem);
  const addItemToCartHandler = () => addItemToCart(cartitem);
  const removeItemFromCartHandler = () => removeItemFromCart(cartitem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCartHandler}>
          {" "}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button" onClick={cartItemToClearHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;

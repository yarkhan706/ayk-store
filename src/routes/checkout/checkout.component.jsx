import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext, useEffect } from "react";

const CheckOut = () => {
  const { cartItems,addItemToCart , removeItemFromCart} = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => {
        const { id, name, quantity, imageUrl, price } = item;
        return (
          <div key={id}>
            <img src={imageUrl} alt={`${name}`} />
            <h2>{name}</h2>
            <span onClick={() => removeItemFromCart(item)}>&lt;</span>
            <span>{quantity}</span>
            <span onClick={() => addItemToCart(item)}>&gt;</span>
            <br />
            <span>{price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;

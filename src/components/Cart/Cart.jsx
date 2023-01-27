import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "@/redux/cartReducer";

import "./Cart.scss";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={`${import.meta.env.VITE_API_UPLOAD_URL}${item?.img}`}
            alt="cartImage"
          />
          <div className="details">
            <h1>{item.title?.slice(0, 30)}</h1>
            <p>{item.desc?.slice(0, 30)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeFromCart(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

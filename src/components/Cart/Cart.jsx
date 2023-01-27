import { loadStripe } from "@stripe/stripe-js";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "@/redux/cartReducer";

import makeRequest from "../../makeRequest";

import "./Cart.scss";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // public key
  const stripePromise = loadStripe(
    "pk_test_51MUoNdKBkned7iHqL7ODYVO9inBGL143SlGrhO0fX4234PyBKT9H1QQ5daAM5AuWz7NNwUvm2mFaFyMCM0qjYA1m00nNA8MOGi"
  );
  console.log(products);

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
      <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import useFetch from "@/hooks/useFetch";
import { addToCart } from "@/redux/cartReducer";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import "./Product.scss";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <>
      {error ? (
        "Something went wrong!"
      ) : loading ? (
        "loading"
      ) : (
        <div className="product">
          <div className="left">
            <div className="images">
              <img
                src={`${import.meta.env.VITE_API_UPLOAD_URL}${
                  data?.attributes?.img?.data?.attributes?.url
                }`}
                alt="image"
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={`${import.meta.env.VITE_API_UPLOAD_URL}${
                  data?.attributes?.img2?.data?.attributes?.url
                }`}
                alt="image"
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={`${import.meta.env.VITE_API_UPLOAD_URL}${
                  data?.attributes[selectedImg].data?.attributes?.url
                }`}
                alt="image"
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              {quantity}
              <button
                onClick={() =>
                  setQuantity(quantity < 10 ? quantity + 1 : quantity)
                }
              >
                +
              </button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    img: data?.attributes?.img?.data?.attributes?.url,
                    price: data?.attributes?.price,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

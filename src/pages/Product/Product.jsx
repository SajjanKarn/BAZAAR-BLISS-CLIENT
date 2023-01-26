import { useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import "./Product.scss";

const images = [
  "https://i.ibb.co/S6qMxwr/jean.jpg",
  "https://i.ibb.co/Mhh6wBg/jean-2.jpg",
];

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="image" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="image" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="image" />
        </div>
      </div>
      <div className="right">
        <h1>Jean Jacket</h1>
        <span className="price">$599</span>
        <p>
          Jean jacket is a must have for every wardrobe. It is a timeless piece
          that can be worn all year round. It is a timeless piece that can be
          worn all year round. It is a timeless piece that can be worn all year
          round.
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            -
          </button>
          {quantity}
          <button
            onClick={() => setQuantity(quantity < 10 ? quantity + 1 : quantity)}
          >
            +
          </button>
        </div>
        <button className="add">
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
  );
}

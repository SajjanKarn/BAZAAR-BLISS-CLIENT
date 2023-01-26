import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={`${import.meta.env.VITE_API_UPLOAD_URL}${
              item?.attributes.img.data.attributes.url
            }`}
            alt="image-1"
            className="mainImg"
          />
          <img
            src={`${import.meta.env.VITE_API_UPLOAD_URL}${
              item?.attributes.img2.data.attributes.url
            }`}
            alt="image-2"
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}

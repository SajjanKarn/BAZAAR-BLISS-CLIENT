import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ item }) {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.isNew && <span>New Season</span>}
          <img src={item?.img} alt="image-1" className="mainImg" />
          <img src={item?.img2} alt="image-2" className="secondImg" />
        </div>
        <h2>{item?.title}</h2>
        <div className="prices">
          <h3>${item?.oldPrice || item?.price + 20}</h3>
          <h3>${item?.price}</h3>
        </div>
      </div>
    </Link>
  );
}

import { useState } from "react";
import Card from "@/components/Card/Card";
import "./List.scss";

const List = ({ catId }) => {
  const [data, setData] = useState([
    {
      id: 1,
      img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cream jacket",
      isNew: true,
      oldPrice: 60,
      price: 29,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sweat shirt",
      isNew: true,
      oldPrice: 433,
      price: 199,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hoodies",
      oldPrice: 70,
      price: 30,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Women's jacket",
      oldPrice: 100,
      price: 55,
    },
  ]);

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;

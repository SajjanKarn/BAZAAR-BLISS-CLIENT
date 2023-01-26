import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card/Card";

import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

export default function FeaturedProducts({ type, description }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>{description}</p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

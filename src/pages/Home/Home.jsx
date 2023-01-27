import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { resetCart } from "@/redux/cartReducer";

import Slider from "@/components/Slider/Slider";
import Categories from "@/components/Categories/Categories";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Contact from "@/components/Contact/Contact";

import "./Home.scss";

export default function Home() {
  const dispatch = useDispatch();
  // get the success query param from the url
  const [isSuccess, setIsSuccess] = useState(
    useLocation().search.includes("success=true")
  );

  console.log("isSuccess", isSuccess);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your order has been placed successfully!", {
        duration: 3500,
        position: "top-left",
      });

      dispatch(resetCart());
    }
  }, [isSuccess]);

  const FeaturedDescription =
    "Discover the latest and greatest at Bazaar Bliss in our featured section. From must-have fashion items to the newest gadgets and home essentials, our featured collection has it all. Shop now and be the first to own the hottest trends and products.";
  const TrendingDescription =
    "Stay on top of the latest trends with Bazaar Bliss' trending section. We've curated a collection of the most popular and in-demand products for you to shop. From fashion to beauty, technology and beyond, our trending selection has something for everyone. Browse now and get your hands on the hottest products before they sell out.";

  return (
    <>
      <Toaster />
      <div className="home-page">
        <Slider />
        <FeaturedProducts type="Featured" description={FeaturedDescription} />
        <Categories />
        <FeaturedProducts type="Trending" description={TrendingDescription} />
        <Contact />
      </div>
    </>
  );
}

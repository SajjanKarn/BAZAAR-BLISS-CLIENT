import Slider from "@/components/Slider/Slider";
import Categories from "@/components/Categories/Categories";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Contact from "@/components/Contact/Contact";

import "./Home.scss";

export default function Home() {
  const FeaturedDescription =
    "Discover the latest and greatest at Bazaar Bliss in our featured section. From must-have fashion items to the newest gadgets and home essentials, our featured collection has it all. Shop now and be the first to own the hottest trends and products.";
  const TrendingDescription =
    "Stay on top of the latest trends with Bazaar Bliss' trending section. We've curated a collection of the most popular and in-demand products for you to shop. From fashion to beauty, technology and beyond, our trending selection has something for everyone. Browse now and get your hands on the hottest products before they sell out.";

  return (
    <div className="home-page">
      <Slider />
      <FeaturedProducts type="Featured" description={FeaturedDescription} />
      <Categories />
      <FeaturedProducts type="Trending" description={TrendingDescription} />
      <Contact />
    </div>
  );
}

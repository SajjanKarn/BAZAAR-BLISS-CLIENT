import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    url: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    url: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function Slider() {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={700}
        images={images}
        showNavs={true}
      />
    </div>
  );
}

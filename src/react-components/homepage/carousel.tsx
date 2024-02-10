import React from "react";
import "./carousel.css";

interface CarouselItemProps {
  imagesrcArray: string[];
  altArray: string[];
  ratingArray: string[];
  resolution: string;
}
const CarouselItem: React.FC<CarouselItemProps> = ({
  imagesrcArray,
  altArray,
  ratingArray,
  resolution,
}) => {
  return (
    <>
      {imagesrcArray.map((image, index) => {
        return (
          <section key={index} className="homepage--carousel-item">
            <img src={image} alt={altArray[index]} />
            <p>{altArray[index]}</p>
            <div className="homepage--carousel-rating">
              <img
                className="homepage--carousel-star-icon"
                src="./icons/star.svg"
                alt="star"
              />
              <p>{ratingArray[index]}/5</p>
            </div>
            <button className="homepage--carousel-order-button">Order</button>
          </section>
        );
      })}
    </>
  );
};
const Carousel: React.FC = () => {
  return (
    <div className="homepage--carousel-slide">
      <div className="homepage--carousel-arrow homepage--carousel-arrow-left"></div>
      <div className="homepage--carousel-images">
        <CarouselItem
          resolution="high"
          imagesrcArray={[
            "./images/new-york-strip.png",
            "./images/ribeye.png",
            "./images/kobe-beef.png",
            "./images/chateaubriand.png",
          ]}
          //   capitalise each word
          altArray={["New York Strip", "Ribeye", "Kobe Beef", "Chateaubriand"]}
          ratingArray={["4.9", "4.3", "4.5", "4.7"]}
        />
      </div>
      <div className="homepage--carousel-arrow homepage--carousel-arrow-right"></div>
    </div>
  );
};

export default Carousel;

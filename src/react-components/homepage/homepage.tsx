import React from "react";
import "./homepage.css";
import Carousel from "./carousel.tsx";
interface CardProps {
  photosrc: any;
  subtitle: string;
  alt: string;
  description: string;
}
const Card: React.FC<CardProps> = ({
  photosrc,
  alt,
  subtitle,
  description,
}) => {
  return (
    <div className="homepage--card">
      <img src={photosrc} alt={alt} />

      <div className="homepage--card-caption">
        <h2 className="homepage--card-subtitle">{subtitle}</h2>
        <p className="homepage--card-description">{description}</p>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <main className="homepage">
      <section className="homepage--welcome">
        <img
          src={require("../../images/rectangle-1690.png")}
          alt="wine table"
        />
        <div className="homepage--welcome-text">
          <h1>Welcome to Steakbuds</h1>
          <h2>where culinary excelence meets warm hospitality!</h2>
          <p>
            At Steakbuds, we pride ourselves on offering a diverse dining
            experience that tantalizes your taste buds with succulent steaks,
            delectable vegetarian cuisines, an array of beverages, fine wines,
            and popular dishes from around the globe.
          </p>
        </div>
      </section>
      <section className="homepage--carousel">
        <h3>Reactivate the carnival in you</h3>
        <h2>re-steak yourself!</h2>
        <Carousel />
      </section>
      <section className="homepage--new">
        <Card
          photosrc={require("../../images/rectangle-1730.png")}
          alt="rice dish"
          subtitle="new veg cuisines"
          description="Indulge in our thoughtfully curated menu featuring an array of plant-based delights, from hearty salads and savory starters to mouthwatering mains and decadent desserts. Whether you're a committed vegetarian or simply seeking a delicious and nutritious meal, Veggie Haven offers something for everyone."
        ></Card>
        <Card
          photosrc={require("../../images/rectangle-1740.png")}
          alt="pork ribs"
          subtitle="new specials"
          description="Discover our latest specials at Steakbuds! Indulge in Surf & Turf, Vegetarian Delight, Wine & Dine, or Around the World flavors. From succulent steak to vibrant vegetarian dishes and expertly paired wines, our specials promise a memorable culinary journey for every palate."
        ></Card>
      </section>
      <section className="homepage--book">
        <img
          src={require("../../images/rectangle-1691.png")}
          alt="reservation table"
        />
        <div className="homepage--book-text">
          {" "}
          <h2>experience exception dining with us </h2>
          <p>
            Planning a special evening? Take advantage of our convenient in
            advance reservations to ensure a seamless dining experience. Prefer
            to enjoy our delicious fare from the comfort of your home? Simply
            place your order online and let us bring the flavors of Steakbuds to
            your doorstep.
          </p>
          <button className="homepage--book-button">Book a table</button>
        </div>
      </section>
    </main>
  );
};

export default Homepage;

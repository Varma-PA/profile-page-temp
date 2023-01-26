import React from "react";
import PageComponent from "../../components/page-component";
import data from "../../data/image-location.json";

const HomePage = () => {
  return (
    <PageComponent>
      <div data-testid="home" className="position-relative">
        <div className="home_avatar_image_location">
          <img
            className="home_avatar"
            src={data[3].imageURL}
            alt={data[3].imageAltName}
          />
        </div>
        <section>
          <div>
            <div>Outside Page Component</div>
          </div>
        </section>
      </div>
    </PageComponent>
  );
};

export default HomePage;

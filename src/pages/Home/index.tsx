import React from "react";
import PageComponent from "../../components/page-component";
import data from "../../data/image-location.json";

const HomePage = () => {
  return (
    <div data-testid="home" className="home">
      <PageComponent>
        <div>
          <img src={data[3].imageURL} alt={data[3].imageAltName} />
          <div>Outside Page Component</div>
        </div>
      </PageComponent>
    </div>
  );
};

export default HomePage;

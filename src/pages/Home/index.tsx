import React from "react";
import PageComponent from "../../components/page-component";
import data from "../../data/image-location.json";

const HomePage = () => {
  return (
    <PageComponent>
      <div data-testid="home">
        <img src={data[3].imageURL} alt={data[3].imageAltName} />
        <div>Outside Page Component</div>
      </div>
    </PageComponent>
  );
};

export default HomePage;

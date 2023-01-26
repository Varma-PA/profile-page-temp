import React from "react";
import data from "../../data/image-location.json";

interface propType {
  children: JSX.Element;
}

const PageComponent = ({ children }: propType) => {
  return (
    <div className="page_component">
      <section className="page_component-hero-image-box">
        <div className="page_component-hero-image-box-home">
          <span>Welcome</span>
        </div>
        <img
          className="page_component-hero-image"
          src={data[1].imageURL}
          alt={data[1].imageAltName}
        />
      </section>
      <section>{children}</section>
    </div>
  );
};

export default PageComponent;

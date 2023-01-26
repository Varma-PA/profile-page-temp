import React, { useContext } from "react";
import data from "../../data/image-location.json";
import { ThemeContext } from "../../ThemeContext";

interface propType {
  children: JSX.Element;
}

const PageComponent = ({ children }: propType) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`page_component page-${theme}`}>
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

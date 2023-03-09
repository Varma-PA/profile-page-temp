import React, { useContext } from "react";
import data from "../../data/image-location.json";
import { ThemeContext } from "../../ThemeContext";

interface propType {
  dataIndex: number;
  title: string;
  children: JSX.Element;
}

const PageComponent = ({ dataIndex, title, children }: propType) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`page_component page-${theme}`}>
      <section className="page_component-hero-image-box">
        <div className="page_component-hero-image-box-home">
          <span>{title}</span>
        </div>
        <img
          className="page_component-hero-image"
          src={data[dataIndex].imageURL}
          alt={data[dataIndex].imageAltName}
        />
      </section>
      <section>{children}</section>
    </div>
  );
};

export default PageComponent;

import React, { useContext, useEffect, useRef } from "react";
import PageComponent from "../../components/page-component";
import iconLocation from "../../data/icons-location.json";
import { ThemeContext } from "../../ThemeContext";

const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
    <PageComponent dataIndex={0} title="Contact">
      <div className="contact-main-div">
        <h2>This is the Contact Page</h2>

        <div className={`contact-tiles contact-tiles-${theme}`}>
          <div
            onClick={() => {
              window.open(
                "mailto:achyuth.varma1@gmail.com?subject=Contact&body=Hi There!"
              );
            }}
          >
            <img src={iconLocation[0].location} alt={iconLocation[0].title} />
          </div>
          <div
            onClick={() => {
              location.href =
                "https://www.linkedin.com/in/achyuth-varma-penmetcha-795510ba/";
            }}
          >
            <img src={iconLocation[1].location} alt={iconLocation[1].title} />
          </div>
          <div
            onClick={() => {
              location.href = "https://www.instagram.com/i_am_achyuth/";
            }}
          >
            <img src={iconLocation[2].location} alt={iconLocation[2].title} />
          </div>
          <div
            onClick={() => {
              location.href = "https://github.com/Varma-PA";
            }}
          >
            <img
              src={`${iconLocation[3].location + theme}.png`}
              alt={iconLocation[3].title}
            />
          </div>
        </div>
      </div>
    </PageComponent>
  );
};

export default Contact;

import React, { useContext } from "react";
import PageComponent from "../../components/page-component";
import data from "../../data/image-location.json";
import { ThemeContext } from "../../ThemeContext";

const HomePage = () => {
  const theme = useContext(ThemeContext);

  return (
    <PageComponent>
      <div data-testid="home" className="position-relative">
        <div className="image-and-content">
          <img
            className="home_avatar"
            src={data[3].imageURL}
            alt={data[3].imageAltName}
          />

          <section className="flex_content">
            {/* <div>
              <div>Outside Page Component</div>
            </div> */}

            {/* <div className="introduction use-rubik-font">
              <h2 className="typewriter typewriter-hi-there">
                <span className="">Hi There!!</span>
              </h2>
              <h2 className="typewriter typewriter-name">
                <span className="">I'm Achyuth</span>
              </h2>
            </div> */}

            <div className="wrapper">
              <div className={"static-txt " + theme + "-static"}>I'm </div>
              <ul className={"dynamic-txts-" + theme + "-txts"}>
                <li>
                  <span>a Student</span>
                </li>
                <li>
                  <span>a Developer</span>
                </li>
                <li>
                  <span>an Engineer</span>
                </li>
                <li>
                  <span>a Gamer</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageComponent>
  );
};

export default HomePage;

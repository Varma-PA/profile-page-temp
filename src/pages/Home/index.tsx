import React, { useContext } from "react";
import HorizontalBarGraph from "../../components/Graphs/Horizontal-Skill-Graph";
import PageComponent from "../../components/page-component";
import Projects from "../../components/Projects";
import SkillsBarGraph from "../../components/SkillsBarGraph";
import SkillSet from "../../components/skillset";
import data from "../../data/image-location.json";
import { ThemeContext } from "../../ThemeContext";

const HomePage = () => {
  const theme = useContext(ThemeContext);

  const labels = ["Java", "JavaScript", "TypeScript", "Python"];

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
            {/* Auto Typing Text */}

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
                <li>
                  <span>Achyuth</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="flex-skills flex-skills-name use-rubik-font margin-gap">
          <div className="description-name">
            Hello There. This is Achyuth, nice to meet you. Please take a look
            around
          </div>
          <div className="sub-description-name">
            I'm highly passionate and ❤️ to build stuff that improves the lives
            of those around me. I specialize in creating a full-stack website
            and handling its scalability.
          </div>
        </div>

        <div className="flex-skills">
          <div className="flex-sills-member">
            <div className={"icon-" + theme}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M20.35 31.75q1.15 1.15 3.325 1.075 2.175-.075 3.175-1.625l10.8-16.95L20.9 25.2q-1.5 1-1.6 3.2-.1 2.2 1.05 3.35Zm3.55-23.7q2.85 0 5.95.925t5.95 3.175L33.2 14q-2.25-1.5-4.825-2.225-2.575-.725-4.475-.725-7 0-11.95 5Q7 21.05 7 28.2q0 2.25.625 4.55T9.4 37h28.95q1.1-1.8 1.75-4.2.65-2.4.65-4.7 0-2.1-.625-4.525Q39.5 21.15 37.9 19.1l1.95-2.6q1.9 2.8 2.85 5.625.95 2.825 1.05 5.675.1 3-.6 5.65-.7 2.65-2.05 4.9-.6 1.15-1.275 1.4-.675.25-1.675.25H9.6q-.85 0-1.675-.425Q7.1 39.15 6.7 38.35q-1.3-2.4-2-4.875T4 28.2q0-4.15 1.575-7.825t4.275-6.4q2.7-2.725 6.325-4.325t7.725-1.6Zm-.45 16.55Z" />
              </svg>
            </div>
            <div className="skills-heading">Fast</div>
            <div>
              Faster Load Times and smooth interaction, my pivotal priority
            </div>
          </div>
          <div className="flex-sills-member">
            <div className={"icon-" + theme}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M24 44q-1.7 0-2.875-1.175T19.95 39.95h8.1q0 1.7-1.175 2.875T24 44Zm-8.1-7.15v-3h16.2v3Zm.25-6.05q-3.3-2.15-5.225-5.375Q9 22.2 9 18.15q0-6.1 4.45-10.55Q17.9 3.15 24 3.15q6.1 0 10.55 4.45Q39 12.05 39 18.15q0 4.05-1.9 7.275-1.9 3.225-5.25 5.375Zm1.1-3H30.8q2.4-1.6 3.8-4.15 1.4-2.55 1.4-5.5 0-4.95-3.525-8.475Q28.95 6.15 24 6.15q-4.95 0-8.475 3.525Q12 13.2 12 18.15q0 2.95 1.4 5.5t3.85 4.15Zm6.75 0Z" />
              </svg>
            </div>
            <div className="skills-heading">Intuitive</div>
            <div>Anyone should able to understand the interface</div>
          </div>
          <div className="flex-sills-member">
            <div className={"icon-" + theme}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="m9.35 20.45 5.3 2.25q.9-1.8 1.925-3.55Q17.6 17.4 18.75 15.8L14.8 15Zm7.7 4.05 6.65 6.65q2.85-1.3 5.35-2.95 2.5-1.65 4.05-3.2 4.05-4.05 5.95-8.3 1.9-4.25 2.05-9.6-5.35.15-9.6 2.05t-8.3 5.95q-1.55 1.55-3.2 4.05-1.65 2.5-2.95 5.35Zm11.45-4.8q-1-1-1-2.475t1-2.475q1-1 2.475-1t2.475 1q1 1 1 2.475t-1 2.475q-1 1-2.475 1t-2.475-1Zm-.75 19.15 5.45-5.45-.8-3.95q-1.6 1.15-3.35 2.175T25.5 33.55Zm16.3-34.7q.45 6.8-1.7 12.4-2.15 5.6-7.1 10.55l-.1.1-.1.1 1.1 5.5q.15.75-.075 1.45-.225.7-.775 1.25l-8.55 8.6-4.25-9.9-8.5-8.5-9.9-4.25 8.6-8.55q.55-.55 1.25-.775.7-.225 1.45-.075l5.5 1.1q.05-.05.1-.075.05-.025.1-.075 4.95-4.95 10.55-7.125 5.6-2.175 12.4-1.725Zm-36.6 27.6Q9.2 30 11.725 29.975 14.25 29.95 16 31.7q1.75 1.75 1.725 4.275Q17.7 38.5 15.95 40.25q-1.3 1.3-4.025 2.15Q9.2 43.25 3.75 44q.75-5.45 1.575-8.2.825-2.75 2.125-4.05Zm2.1 2.15q-.7.75-1.25 2.35t-.95 4.1q2.5-.4 4.1-.95 1.6-.55 2.35-1.25.95-.85.975-2.125.025-1.275-.875-2.225-.95-.9-2.225-.875-1.275.025-2.125.975Z" />
              </svg>
            </div>
            <div className="skills-heading">Agility</div>
            <div>Keep updating with the latest design trends..</div>
          </div>
        </div>

        <div>
          {/* <SkillsBarGraph /> */}
          {/* <HorizontalBarGraph /> */}
          <div className="home-skillset">
            <h2>Skillset</h2>
            <div className="home-skillset-columns">
              <div>
                <SkillSet
                  heading="Languages"
                  content={["Java", "JavaScript", "Python"]}
                />
                <SkillSet
                  heading="Frontend"
                  content={["React", "Next JS", "Angular", "HTML", "CSS"]}
                />
                <SkillSet
                  heading="Backend"
                  content={["Spring Boot", "Express", "Flask"]}
                />
                <SkillSet
                  heading="Database Management Systems"
                  content={[
                    "Oracle DB",
                    "MySQL",
                    "Microsoft SQL",
                    "MongoDB",
                    "Amazon DynamoDB",
                  ]}
                />
                <SkillSet
                  heading="Container Management"
                  content={["Docker", "Kubernetes"]}
                />
              </div>
              <div>
                <SkillSet
                  heading="CI / CD"
                  content={[
                    "Jenkins",
                    "GitHub Actions",
                    "Concourse",
                    "AWS CodePipeline",
                  ]}
                />
                <SkillSet
                  heading="Infrastructure as Code"
                  content={["Hashicorp Terraform", "Hashicorp Packer"]}
                />
                <SkillSet
                  heading="Testing Frameworks"
                  content={["JUnit", "Jest", "Vitest", "Mockito"]}
                />
                <SkillSet
                  heading="UI / UX"
                  content={["Figma", "Adobe XD", "Balsamiq", "Moqup"]}
                />
                <SkillSet
                  heading="Certifications"
                  content={[
                    "AWS Certifiec Cloud Practitioner",
                    "Google UX Design Certification",
                    "DeepLearning.AI Tensorflow Developer",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="home-projects">
            <Projects />
          </div>
        </div>
      </div>
    </PageComponent>
  );
};

export default HomePage;

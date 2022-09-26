import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "../components/ProgressBar";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills1 = [
    {
      percentage: 90,
      name: "C/C++",
    },
    {
      percentage: 85,
      name: "Java",
    },
    {
      percentage: 80,
      name: "Javascript",
    },
  ];
  const skills2 = [
    {
      percentage: 80,
      name: "MySql",
    },
    {
      percentage: 75,
      name: "Spring Boot",
    },
    {
      percentage: 75,
      name: "React Js",
    },
  ];
 
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              {/* <p>
               Tech-Stacks I am Proficient At 
              </p> */}
              <Carousel
                className="skill-slider mt-5"
                responsive={responsive}
                infinite
                // autoplay
                arrows={false}
                transitionDuration={100}
              >
                {skills1.map((skill, index) => {
                  return (
                    <div className="item" key={index}>
                      <ProgressBar
                        className="progress-bar"
                        value={skill.percentage}
                        color="#a53277"
                      />
                      <h5>{skill.name}</h5>
                    </div>
                  );
                })}
              </Carousel>
              <Carousel
                className="skill-slider mt-5"
                responsive={responsive}
                infinite
                // autoPlay
                arrows={false}
                transitionDuration={100}
              >
                {skills2.map((skill, index) => {
                  return (
                    <div className="item" key={index}>
                      <ProgressBar
                        className="progress-bar"
                        value={skill.percentage}
                        color="#4A2FBD"
                      />
                      <h5>{skill.name}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
}

export default Skills;

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

  const skills = [
    {
      percentage: 90,
      name: "C/C++",
      color: "#4A2FBD",
    },
    {
      percentage: 85,
      name: "Java",
      color: "#a53277",
    },
    {
      percentage: 80,
      name: "Javascript",
      color: "#4A2FBD",
    },
    {
      percentage: 80,
      name: "MySql",
      color: "#a53277",
    },
    {
      percentage: 75,
      name: "Spring Boot",
      color: "#4A2FBD",
    },
    {
      percentage: 75,
      name: "React Js",
      color: "#a53277",
    },
  ];

  return (
    <section className="skill mt-5" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p className="mt-6">
                These are technologies that I have experience in. Always looking
                to learn new technologies to broaden my horizons and find the
                ones that best suit the client's needs as a developer.
              </p>
              <Carousel
                className="skill-slider mt-5"
                responsive={responsive}
                infinite
                autoPlay={true}
                arrows={false}
                transitionDuration={100}
              >
                {skills.map((skill, index) => {
                  return (
                    <div className="item" key={index}>
                      <ProgressBar
                        className="progress-bar"
                        value={skill.percentage}
                        color={skill.color}
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

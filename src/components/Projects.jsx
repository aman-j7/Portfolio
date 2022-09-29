import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

function Projects() {
  const projects = [
    {
      title: "Next Generation Learning",
      description:
        "Website that offers E-learning features and Content Management. ",
      live: "https://next-gen-learning.000webhostapp.com/",
      code: "https://github.com/aman-j7/Next-Gen-Learning",
    },
    {
      title: "House Marketplace Paradise",
      description:
        "E-Commerce website for Selling, Renting and Purchasing houses. ",
      live: "https://house-marketplace-paradise.netlify.app/",
      code: "https://github.com/aman-j7/House-MarketPlace-Frontend",
    },
    {
      title: "India Covid-19 Tracker",
      description:
        "Web Application for displaying the scenario of Covid-19 in India. ",
      live: "https://shadow-7-aj.shinyapps.io/Covid19-mapper/",
      code: "https://github.com/aman-j7/India-Covid-Mapper",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col className="align-center">
            <h2>Projects</h2>
            <p>
              These are the projects that I have worked on. I am always looking
              to collaborate and further improve them.
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
        <Row className="text-center">
          <a href="https://github.com/aman-j7">
            <button className=" mt-4 check-button ">More Projects</button>
          </a>
        </Row>
      </Container>
      <img src={colorSharp2} alt=" " className="background-image-right" />
      <img src={colorSharp} alt=" " className="background-image-left" />
    </section>
  );
}

export default Projects;

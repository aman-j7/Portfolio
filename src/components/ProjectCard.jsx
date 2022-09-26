import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ProjectCard({ title, description, live, code }) {
  return (
    <Col size={12} sm={6} md={4}>
      <Card className="proj-imgbx card">
        <Card.Body className="proj-txtx">
          <Card.Title>
            <h4>{`${title}`}</h4>
          </Card.Title>
          <Card.Text>
            <span>{description}</span>
          </Card.Text>
        </Card.Body>
        <div className="my-2">
          <a href={live}>
            <button className="mx-4 card-button">Live</button>
          </a>
          <a href={code}>
            <button className="mx-4 card-button">Code</button>
          </a>
        </div>
      </Card>
    </Col>
  );
}

export default ProjectCard;

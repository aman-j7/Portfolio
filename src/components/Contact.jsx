import { Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className="contact" id="connect">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={contactImg} alt="Contact Us" />
        </Col>
        <Col md={6}>
          <h2> Reach Out to me! </h2>
          <p>
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </p>
          <p style={{color: "yellow", fontWeight: "bold" }}>"Pressure is privilege ! Make sure to go ULTRA PLUS++"</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> India </p>
          <p>Open for opportunities: Yes</p>
          <div className="social-icon">
            <a href="https://in.linkedin.com/in/aman-kumar-b56a48201">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="fa-xl "
                style={{ color: "blue" }}
              />
            </a>
            <a href="https://github.com/aman-j7">
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-xl"
                style={{ color: "white" }}
              />
            </a>
            <a href="mailto:463amanj@gmail.com">
              <FontAwesomeIcon
                icon={faGoogle}
                className="fa-xl"
                style={{ color: "red" }}
              />
            </a>
          </div>
        </Col>
      </Row>
      <Row> <p  className="mt-2 m-auto" style={{ fontSize: "1rem",fontWeight : "bold", width : "100%", textAlign:"center" }}>Made with ❤️ by Aman </p></Row>
    </section>
  );
}

export default Contact;

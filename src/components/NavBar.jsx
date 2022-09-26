import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://in.linkedin.com/in/aman-kumar-b56a48201">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fa-xl "
                  style={{ color: "blue"}}
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
            <a href="#connect" style={{ textDecoration: "none" }}>
              <button>Let's Connect</button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { github, google, instagram, linkedin, x, reddit } from "../assets";

const Banner = () => {
  return (
    <Row
      style={{
        width: "100vw",
        height: "40vh",
        background: "linear-gradient(135deg, #d5d5d5 0%, #f0f0f0 100%)",
      }}
    >
      <Col sm={4} style={{ paddingLeft: "10%", textAlign: "left" }}>
        <a style={{ fontSize: "500%" }}>About Me</a>
        <br />
        <a>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </a>
        <br />
        <br />
        <a>Jakob Baltes</a>
        <br />
        <button />
      </Col>
      <Col sm={4}>Jakob Baltes</Col>
      <Col sm={4} style={{ textAlign: "left", paddingRight: "10%" }}>
        <a style={{ fontSize: "500%" }}>About Me</a>
        <br />
        <a>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </a>
        <br />
        <br />

        <Row>
          <Col sm={6}>blabla</Col>
          <Col sm={6}>blabla</Col>
        </Row>
        <br />
        <Row>
          <Col sm={2}>
            <a
              href="https://github.com/JBalkobsn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="github"
                style={{
                  cursor: "pointer",
                  height: "40px",
                }}
                className="zoom"
              />
            </a>
          </Col>
          <Col sm={2}>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={google}
                alt="google"
                style={{ cursor: "pointer", height: "40px" }}
                className="zoom"
              />
            </a>
          </Col>
          <Col sm={2}>
            <a
              href="https://www.instagram.com/jakob.blts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="instagram"
                style={{ cursor: "pointer", height: "40px" }}
                className="zoom"
              />
            </a>
          </Col>
          <Col sm={2}>
            <a
              href="https://www.linkedin.com/in/jakob-baltes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedin"
                style={{ cursor: "pointer", height: "40px" }}
                className="zoom"
              />
            </a>
          </Col>
          <Col sm={2}>
            <a
              href="https://x.com/JakobBaltes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={x}
                alt="x"
                style={{ cursor: "pointer", height: "40px" }}
                className="zoom"
              />
            </a>
          </Col>
          <Col sm={2}>
            <a
              href="https://www.reddit.com/u/JBalkobsn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reddit}
                alt="reddit"
                style={{ cursor: "pointer", height: "40px" }}
                className="zoom"
              />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Banner;

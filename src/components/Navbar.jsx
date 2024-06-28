import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router-dom";
import { home, logout } from "../assets";

const Navbar = () => {
  const navigate = useNavigate();
  let homeButton;
  let logoutButton;

  homeButton = (
    <img
      src={home}
      alt="home"
      className="zoom p-2"
      style={{ height: "40px", cursor: "pointer" }}
    />
  );
  logoutButton = (
    <img
      src={logout}
      alt="logout"
      className="zoom p-2"
      style={{ height: "40px", cursor: "pointer" }}
    />
  );

  return (
    <Row className="h-20" style={{ backgroundColor: "#303134" }}>
      <Col xs={2}>{homeButton}</Col>
      <Col xs={8} style={{ textAlign: "center" }}>
        <a style={{ color: "#646cff", fontSize: "1.5rem", fontWeight: "600" }}>
          MobileWebapp
        </a>
      </Col>
      <Col xs={2} style={{ textAlign: "right" }}>
        {logoutButton}
      </Col>
    </Row>
  );
};

export default Navbar;

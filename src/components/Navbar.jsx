import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { home, logout } from "../assets";

const Navbar = () => {
  return (
    <Row
      className="h-20"
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "7vh",
        display: "flex",
        color: "black",
        alignItems: "center",
      }}
    >
      <Col sm={6}>
        <Col sm={4}>Jakob Baltes</Col>
      </Col>
      <Col sm={6} style={{ display: "flex" }}>
        <Col sm={3}>Home</Col>
        <Col sm={3}>Portfolio</Col>
        <Col sm={3}>About Me</Col>
        <Col sm={3}>Contact</Col>
      </Col>
    </Row>
  );
};

export default Navbar;

import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { Banner, TileSection } from "../components";

const Home = () => {
  return (
    <Row
      className="h-20"
      style={{ width: "100vw", height: "93vh", backgroundColor: "blue" }}
    >
      <div style={{ width: "100vw" }}>
        <Banner />
        <TileSection />
      </div>
    </Row>
  );
};

export default Home;

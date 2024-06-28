import * as React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SiteLayout = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#202124",
        height: "100vh",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default SiteLayout;

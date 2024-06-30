import * as React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SiteLayout = () => {
  return (
    <Container
      fluid
      style={{
        height: "100vh",
        justifyContent: "center", // Zentrierung horizontal
        alignItems: "top", // Zentrierung vertikal
      }}
    >
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default SiteLayout;

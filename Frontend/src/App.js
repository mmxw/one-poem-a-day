import React from "react";
import { Container } from "react-bootstrap";
import Testing from './components/Testing';

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Container fluid>
      <div className="d-flex justify-content-end">
        <h1>Poetry Exchange</h1>
      </div>
      <NavBar />

      
    </Container>
  );
}

export default App;

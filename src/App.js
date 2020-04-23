import React from "react";
import {Container} from 'react-bootstrap';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

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

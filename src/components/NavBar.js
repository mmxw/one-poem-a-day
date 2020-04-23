import React from "react";
import { Nav } from "react-bootstrap";
import Home from './Home';

export default function NavBar() {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Poem of The Day</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">All Poets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">All Poems</Nav.Link>
        </Nav.Item>    
      </Nav>
      <Home />
    </div>
  );
}

import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Authors from './Authors';
import Poems from './Poems';

export default function NavBar() {
  return (
    <Router>
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link href="/poem-of-the-day">Poem of The Day</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/poets">All Poets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/poems">All Poems</Nav.Link>
        </Nav.Item>    
      </Nav>
      <Switch>
        <Route path="/poem-of-the-day">
          <Home />
        </Route>
        <Route path="/poets">
          <Authors />
        </Route>
        <Route path="/poems">
          <Poems />
        </Route>
      </Switch>

    </Router>
  );
}

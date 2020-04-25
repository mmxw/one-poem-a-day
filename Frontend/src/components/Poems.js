import React from 'react';
import { ListGroup } from "react-bootstrap";
const poems = require('../helpers/poems.json');

export default function Poems() {
  
  const titles = poems.map(poem => poem.title)
  const sortedTitles = titles.sort()
  
  return (
    <div>
      <ListGroup>
        {sortedTitles.map((title, index) => (
          <ListGroup.Item action href="#" key={index}>
            {title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

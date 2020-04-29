import React from "react";
import { ListGroup } from "react-bootstrap";
const poems = require("../helpers/poems.json");

export default function Authors() {
  const removeDuplicateAuthors = () => {
    let authors = [];
    poems.forEach((poem) => {
      if (!authors.includes(poem.author)) {
        authors.push(poem.author);
      }
    });
    return authors;
  };
  const authors = removeDuplicateAuthors();


  return (
    <div>
      <ListGroup>
        {authors.map((author, index) => (
          <ListGroup.Item action href="#" key={index}>
            {author}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

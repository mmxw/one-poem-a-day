import React from "react";
import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import PoemsByAuthor from './PoemsByAuthor';
// const poems = require("../helpers/poems.json");

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios.get("/api/authors").then((res) => setAuthors(res.data));
  }, []);

  //! USED SQL SELECT DISTINCT AUTHOR INSTEAD!SAVED SO MUCH TIME
  // const removeDuplicateAuthors = () => {
  //   let uniqueAuthors = [];
  //   authors.forEach((obj) => {
  //     if (!uniqueAuthors.includes(obj.author)) {
  //       uniqueAuthors.push(obj.author);
  //     }
  //   });
  //   return uniqueAuthors;
  // };
  // const uniqueAuthors = removeDuplicateAuthors();


  return (
    <div>
      <ListGroup>
        {authors.map((author, index) => (
          <ListGroup.Item action href="#" key={index}>
            <PoemsByAuthor author={author} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

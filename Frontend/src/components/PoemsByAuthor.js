import {React, useEffect, useState} from "react";
import axios from 'axios';
import { ListGroup } from "react-bootstrap";


// const poems = require("../helpers/poems.json");

export default function PoemsByAuthor(author) {

  const [poems, setPoems] = useState({});
  useEffect(() => {
    axios.get(`/api/authors/${author}`).then((res) => setPoems(res.data));
  }, []);
  return (
    <div>
      <ListGroup>
        {poems.map((poem, index) => (
          <ListGroup.Item action href="#" key={index}>
            {poem.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

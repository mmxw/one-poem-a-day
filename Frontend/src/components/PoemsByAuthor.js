import React from "react";
import axios from 'axios';
// const poems = require("../helpers/poems.json");

export default function PoemsByAuthor() {

  const [state, setState] = useState("");
  useEffect(() => {
    axios.get("/api/authors/:author").then((res) => setState(res.data));
  }, []);
  return (
    <div>
      <p>{state}</p>
    </div>
  );
}

const fs = require("fs");
const path = require("path");
// const certPath = path.join(__dirname, "./poems.json");
// const poems = JSON.parse(fs.readFileSync(certPath));
const poems = require("./poems.json");

let allPoems = "";
let allAuthors = "";
const poemCollection = [];
const authorList = [];

poems.forEach((poemObj) => {
  const poemArr = [];
  poemArr.push(poems.indexOf(poemObj) + 1);
  poemArr.push(poemObj.author);
  poemArr.push(poemObj.title);
  poemArr.push(poemObj.lines);
  poemCollection.push(poemArr);
  authorList.push(poemObj.author);
});

authors = new Set(authorList);
authorCollection = [...authors];

poemCollection.forEach((poemArr) => {
  let row = poemArr.join("\t");
  allPoems += row + "\r\n";
});

authorCollection.forEach((author, index) => {
  let row = index + 1 + "\t" + author;
  allAuthors += row + "\r\n";
});

fs.writeFile("./poems.csv", allPoems, function (err) {
  if (err) {
  }
});
fs.writeFile("./authors.csv", allAuthors, function (err) {
  if (err) {
  }
});

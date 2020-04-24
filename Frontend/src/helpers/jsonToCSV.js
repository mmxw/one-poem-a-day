const fs = require("fs");
const path = require("path");
// const certPath = path.join(__dirname, "./poems.json");
// const poems = JSON.parse(fs.readFileSync(certPath));
const poems = require('./poems.json')

let csvContent = "";
const poemCollection = [];
poems.forEach((poemObj) => {
  const poemArr = [];
  poemArr.push(poems.indexOf(poemObj)+1);
  poemArr.push(poemObj.author);
  poemArr.push(poemObj.title);
  poemArr.push(poemObj.lines);
  poemCollection.push(poemArr);
});

poemCollection.forEach((poemArr) => {
  let row = poemArr.join("\t");
  csvContent += row + "\r\n";
});

fs.writeFile('./poems.csv', csvContent, function(err) {
  if(err) {}})




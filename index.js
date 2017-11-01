var _ = require("lodash");
var fs = require("fs");

var contents = fs.readFileSync("data.json");
var people = JSON.parse(contents);

console.log(people.items[0].fname);
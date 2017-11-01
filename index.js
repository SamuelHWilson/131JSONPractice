var _ = require("lodash");
var fs = require("fs");

var contents = fs.readFileSync("data.json");
var people = JSON.parse(contents);

//console.log(people.items[0].fname);

_.forEach(people.items[0], value =>{
    console.log(value);
});

_.forEach(people.items[1], value =>{
    console.log(value);
});
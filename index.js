// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

var inquirer = require("inquirer");
var fs = require("fs");

var generate = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "desc",
      message: "What is the description of your project?",
    },
  ])
  .then(function (data) {
    console.log(data);

    fs.writeFile("README.md", generate(data), function (err) {
      if (err) {
        return console.log("error");
      }
    });
  });
// }]);

//   At least one badge
// Project title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

// User GitHub profile picture
// User GitHub email]

var inquirer = require("inquirer");
var fs = require("fs");

var generate = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "url",
      message: "What is the URL to your project?",
    },
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
    {
      type: "input",
      name: "table",
      message: "What is your project Table of Contents?",
    },
    {
      type: "input",
      name: "audience",
      message: "Who is the audience for this project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What commands should I run to install dependencies?",
    },
    {
      type: "input",
      name: "tests",
      message: "What commands should I run to run tests?",
    },
    {
      type: "input",
      name: "repo",
      message: "What does the user need to know about using repo?",
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

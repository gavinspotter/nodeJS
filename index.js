const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "title",
    },
    {
      type: "input",
      name: "description",
      message: "description of your repo?",
    },
    {
      type: "input",
      name: "links",
      message: "table of contents",
    },
    {
      type: "input",
      name: "installation",
      message: "instructions on installation",
    },
    {
      type: "input",
      name: "usage",
      message: "what is the expected use of this repo",
    },
    {
      type: "number",
      name: "license",
      message: "what licenses does this repo have",
    },
    {
      type: "input",
      name: "contributing",
      message: "who are the contributing authors",
    },
    {
      type: "input",
      name: "tests",
      message: "how does one run tests on this repo",
    },
    {
      type: "input",
      name: "questions",
      message: "contacts",
    },
  ])
  .then((answers) => {
    console.log(answers);

    fs.writeFile("README.md", answers.title, answers.usage, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });

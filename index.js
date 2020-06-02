const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

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

    const readMeFun = () => {
      return `
      Title:${answers.title}
      
      Description:${answers.description}
      
      Table of Contents:${answers.links}
      
      Installation:${answers.installation}
      
      Usage:${answers.usage}
      
      License:${answers.license}
      
      Contributing:${answers.contributing}
      
      Testing:${answers.tests}
      
      Contact:${answers.questions}
      `;
    };

    const readMe = readMeFun();

    fs.writeFile("README.md", readMe, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });

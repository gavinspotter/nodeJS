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
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username",
    },
    {
      type: "input",
      name: "badge1",
      message: "badge label",
    },
    {
      type: "input",
      name: "badge2",
      message: "badge message",
    },
    {
      type: "input",
      name: "badge3",
      message: "badge color",
    },
  ])
  .then((answers) => {
    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function (res) {
      const readMeFun = () => {
        return `
        
        
![avatar](${res.data.avatar_url})

![badge](https://img.shields.io/badge/${answers.badge1}-${answers.badge2}-${answers.badge3})

Title:${answers.title}
        
Description:${answers.description}
        
Table of Contents:${answers.links}
        
Installation:${answers.installation}
        
Usage:${answers.usage}
        
License:${answers.license}
        
Contributing:${answers.contributing}
        
Testing:${answers.tests}
        
Contact:${answers.questions}
  
GitHub email:${res.data.email}


        
        `;
      };

      const readMe = readMeFun();

      fs.writeFile("README.md", readMe, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    });
  });

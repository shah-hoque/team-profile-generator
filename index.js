const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// set the absolute file path of the 'output' dir, using the current module 'index.js' dir path as the starting point
const outputDir = path.resolve(__dirname, "output");
// set the absolute file path of a new file 'team.html' inside the 'output' dir
const outputPath = path.join(outputDir, "team.html");

const render = require("./page-template.js");

// const askQuestions = () => {
//   inquirer.prompt([
//       {
//           name: "title",
//           message: "What is the title of your application? \n",
//           type:"input",
      
//       },
//   ]).then(answers => {
//       // pass into this promise func the type of file to create & its file content
  
//       console.log(answers)

//   }).catch((err) => console.error(err));
// };

// askQuestions()
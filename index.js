const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// FILE CONFIGURATION --------------------------------

// afp = absolute file path

// set the afp of the 'generated-html' dir, using the current module 'index.js' dir path as the starting point
const outputDir = path.resolve(__dirname, "generated-html");

// check if the 'generated-html' dir exists, and create it if it does not
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// set the afp of a new file 'team.html' inside the 'generated-html' dir
const outputPath = path.join(outputDir, "team.html");

const render = require("./page-template.js");

// FILE CONFIGURATION (end) --------------------------------


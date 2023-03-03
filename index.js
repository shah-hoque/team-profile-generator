const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// afp = absolute file path

// set the afp of the 'output' dir, using the current module 'index.js' dir path as the starting point
const outputDir = path.resolve(__dirname, "output");
// set the afp of a new file 'team.html' inside the 'output' dir
const outputPath = path.join(outputDir, "team.html");

const render = require("./page-template.js");

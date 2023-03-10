const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Array to hold all employee objects
const employees = [];

// FILE CONFIGURATION --------------------------------

// afp = absolute file path

// set the afp of the 'generated-html' dir, using the current module 'index.js' dir path as the starting point
const outputDir = path.resolve(__dirname, "generated-html");

// create the 'generated-html' dir if it does not exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// set the afp of a new file 'team.html' inside the 'generated-html' dir
const outputPath = path.join(outputDir, "team.html");

// imports the page-template.html module, which exports a func that takes an array of employee objects and returns an HTML string
const render = require("./page-template.js");

// FILE CONFIGURATION (end) --------------------------------


// ASYNC FUNCTIONS --------------------------------

// FUNC) THAT ADDS MANAGER ANSWERS TO ARRAY
async function addManager() {
  const managerAnswers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNumber",
    },
  ]);

  // new instance of the Manager class with the manager's answers
  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );

  // add manager object to the array
  employees.push(manager);

  // console.log(manager);
  console.log("Manager added!");

  // calls the addOtherEmployee func to display the option to add another employee
  await addOtherEmployee();
}


// FUNC) THAT ADDS ENGINEER ANSWERS TO ARRAY
async function addEngineer() {
  const engineerAnswers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineer's employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineer's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "github",
    },
  ]);

  const engineer = new Engineer(
    engineerAnswers.name,
    engineerAnswers.id,
    engineerAnswers.email,
    engineerAnswers.github
  );

  employees.push(engineer);

  console.log("Engineer added!");

  await addOtherEmployee();
}


// FUNC) THAT ADDS INTERN ANSWERS TO ARRAY
async function addIntern() {
  const internAnswers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the intern's employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the intern's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the intern's school?",
      name: "school",
    },
  ]);

  const intern = new Intern(
    internAnswers.name,
    internAnswers.id,
    internAnswers.email,
    internAnswers.school
  );

  employees.push(intern);

  console.log("Intern added!");

  await addOtherEmployee();
}


// FUNC) THAT DISPLAYS THE addOtherEmployee CHOICES / WRITES HTML TO FILE
async function addOtherEmployee() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add an engineer",
        "Add an intern",
        "Finish building the team",
      ],
      name: "choice",
    },
  ]);

  switch (answer.choice) {
    case "Add an engineer":
      await addEngineer();
      break;
    case "Add an intern":
      await addIntern();
      break;

      // generates the HTML file using the render function and fs.writeFile method
    case "Finish building the team":
      // store the html string in a html var
      const html = render(employees);
      // write the html string to a file in the generated-html dir
      fs.writeFile(outputPath, html, (err) => {
        if (err) throw err;
        console.log("Team HTML file generated successfully!");
      });
      break;
  }
}
// ASYNC FUNCTIONS (end) --------------------------------


// welcome message and call addManager to start the application
console.log("Welcome to the Team Profile Generator!");
addManager();
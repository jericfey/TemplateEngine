const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

function start() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your manager's id?",
        name: "managerId",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid email is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "managerOfficeNumber",
      },
    ])
    .then((answers) => {
      const {
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber,
      } = answers;
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );
      team.push(manager);
      addTeamMember();
    });
}

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "type",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.type) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineerName",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the manager's id?",
        name: "engineerId",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid email is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the Engineer's GitHub Profile?",
        name: "gitHubProfile",
      },
    ])
    .then((answers) => {
      const {
        engineerName,
        engineerId,
        engineerEmail,
        gitHubProfile,
      } = answers;
      const engineer = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        gitHubProfile
      );
      team.push(engineer);
      addTeamMember();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the Intern's id?",
        name: "internId",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid name is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("A valid email is required.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the Intern's School?",
        name: "internSchool",
      },
    ])
    .then((answers) => {
      const { internName, internId, internEmail, internSchool } = answers;
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );
      team.push(intern);
      addTeamMember();
    });
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

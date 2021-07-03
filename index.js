const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
    //TODO write validation of questions
const teamMembers = [];
const idArray = [];

function appMenu() {
    
  function createManager() {
    console.log("Please build your team");
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?",
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?",
      },
    
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      createTeam();// starts create team
    });
  }

  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      switch(userChoice.memberChoice) {
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

  function addEngineer() {//follow manager +library
    inquirer.prompt([
      {
        type:"input",
        name : "engineerName",
        message : "What is the Engineer's name?",
       },
       {
        type:"input",
        name: "engineerId",
        message : "What is the Engineer's ID?",
       },
       {
        type:"input",
        name : "engineerEmail",
        message : "What is the Engineer's email?",
       },
       {
        type:"input",
        name: "githubUser",
        message : "What is the Engineer's GitHub Username?",
       },

    ]).then(answers => {
      console.log(answers);
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.githubUser);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
 
      createTeam();
    });
    //createTeam();
  }

  function addIntern() {
    inquirer.prompt([
      {
        type:"input",
        name : "internName",
        message : "What is the Intern's name?",
      },
      {
        type:"input",
        name: "internId",
        message : "What is the Intern's ID?",
      },
      {
        type:"input",
        name : "internEmail",
        message : "What is the Intern's email?",
      },
      {
        type:"input",
        name: "school",
        message : "What school does the Intern attend",
      },
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
      teamMembers.push(intern);
      idArray.push(answers.internId);

      createTeam();
    });
    //createTeam();
  }

  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();

}


appMenu();

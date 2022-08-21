const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/template');
const inquirer = require('inquirer');
const fs = require('fs');

const team = [];

function init() {
    console.log("Welcome to Go Team Go!");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the Team Manager's name?"
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is the Team Manager's employee ID?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the Team Manager's email address?"
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is the Team Manager's office number?"
            }
        ])
        .then(val => {
            team.push(new Manager(val.managerName, val.managerID, val.managerEmail, val.managerOffice));
        })
        .then(() => addToTeam());
       
}

function addToTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: "Which employee type would you like to add next?",
                choices: ['Engineer', 'Intern', 'I am finished building my team']
            }
        ])
        .then(val => {
            if (val.choice === 'Engineer') {
                addEngineer();
            } else if (val.choice === 'Intern') {
                addIntern();
            } else {
                generatePage(team);
            }
        })
}

function addEngineer() {
    console.log("addEngineer");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the Engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is the Engineer's employee ID?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the Engineer's email address?"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the Engineer's Github?"
            }
        ])
        .then(val => {
            team.push(new Engineer(val.engineerName, val.engineerID, val.engineerEmail, val.engineerGithub));
        })
        .then(() => addToTeam())
}

function addIntern() {
    console.log("addIntern");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the Intern's name?"
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the Intern's employee ID?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the Intern's email address?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the Intern's school?"
            }
        ])
        .then(val => {
            team.push(new Intern(val.internName, val.internID, val.internEmail, val.internSchool));
        })
        .then(() => addToTeam())
}

function generatePage(data) {
    console.log("addHTML");
    generateHTML(data);
}

init();


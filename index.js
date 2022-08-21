//imports libraries and classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/template');
const inquirer = require('inquirer');

const team = [];

//starts app
function init() {
    newEmployee('Manager');
}

//creates new employee object
function newEmployee(employee) {

    let detail = '';

    console.log("Welcome to Go Team Go!");

    if (employee === "Manager") {
        detail = 'office number';
    } else if (employee === "Engineer") {
        detail = 'Github username';
    } else {
        detail = 'school';
    }
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the ${employee}'s name?`
            },
            {
                type: 'input',
                name: 'ID',
                message: `What is the ${employee}'s employee ID?`
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the ${employee}'s email address?`
            },
            {
                type: 'input',
                name: 'details',
                message: `What is the ${employee}'s ${detail}?`
            }
        ])
        .then(val => {
            if (employee === "Manager") {
                team.push(new Manager(val.name, val.ID, val.email, val.details));
            } else if (employee === "Engineer") {
                team.push(new Engineer(val.name, val.ID, val.email, val.details));
            } else {
                team.push(new Intern(val.name, val.ID, val.email, val.details));
            }
        })
        .then(() => addToTeam());
}

//this prompt asks the user what they would like to do (ie add employees or generate page)
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
            if (val.choice === 'Engineer' || val.choice === 'Intern') {
                newEmployee(val.choice);
            } else {
                generatePage(team);
            }
        })
}

//calls to template.js to generate page
function generatePage(data) {
    generateHTML(data);
}

//initializes app
init();
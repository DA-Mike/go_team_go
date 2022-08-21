//imports libraries and classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/template');
const inquirer = require('inquirer');

const team = [];

//creates manager object
function init() {
    newEmployee('Manager');
}


function newEmployee(employee) {

    let valArr = [];

    console.log("Welcome to Go Team Go!");
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
            }
        ])
        .then(val => { 
            valArr.push(val);
            if (employee === 'Manager') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'details',
                            message: `What is the ${employee}'s office number?`
                        }
                    ])
                    .then(val => {
                            team.push(new Manager(valArr[0].name, valArr[0].ID, valArr[0].email, val.details));
                        })
                    .then(() => addToTeam());
            } else if (employee === 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'details',
                            message: `What is the ${employee}'s Github username?`
                        }
                    ])
                    .then(val => {
                        team.push(new Engineer(valArr[0].name, valArr[0].ID, valArr[0].email, val.details));
                    })
                    .then(() => addToTeam());
            } else {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'details',
                            message: `What is the ${employee}'s school?`
                        }
                    ])
                    .then(val => {
                        team.push(new Intern(valArr[0].name, valArr[0].ID, valArr[0].email, val.details));
                    })
                    .then(() => addToTeam());
            }
        })
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


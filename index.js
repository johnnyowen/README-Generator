// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
 
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'appName',
    message: 'What is the name of your project/app?',
},
    {
    type: 'input',
    name: 'description',
    message: 'Give us a breif description of your project/app?',
},
    {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for this project/app?',
},
    {
    type: 'input',
    name: 'installationCommand',
    message: 'What command should be run to install dependencies?',
},
    {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information for this project/app?',
},
    {
    type: 'input',
    name: 'contributions',
    message: 'Does this project/app have any contribution guidelines?',
},
    {
    type: 'input',
    name: 'test',
    message: 'Does this project/app have any test instructions?',
},
    {
    type: 'input',
    name: 'testCommand',
    message: 'What command should be run to invoke tests?',
},
    {
    type: 'input',
    name: 'email',
    message: 'What email address can we reach you at with questions regarding this project/app?',
},
    {
    type: 'input',
    name: 'github',
    message: 'What is the github username will this project/app be deployed under?',
},
    {
    type: 'list',
    name: 'license',
    message: 'Does this project/app have a license?',
    choices: ["Apache 2.0", "Boost Software License 1.0", "BSD 3-Clause License", "Eclipse Public License 1.0", "GNU GPL v3", 
    "The Hippocratic License 2.1", "IBM Public License Version 1.0", "ISC",  "MIT", "Mozilla Public License 2.0", "The Perl License",
    "SIL Open Font License 1.1", "The Unlicense", "The Do What the Fuck You Want to Public License", "Zlib", "None"]
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data)
    fs.writeFile(fileName, fileData, (error) => error ? console.log(error) : console.log('Success'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers)
    });
};

// Function call to initialize app
init();
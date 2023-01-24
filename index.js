// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'describe your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'what is the title of the project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'what did you use to install',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'how should the project be used',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'what license does this project use',
        name: 'license',
        choices: ['MIT','Apache_2.0','The_Unlicense']
    },
    {
        type: 'input',
        message: 'list any contribution guidelines your project may have',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'are there any tests to run in the command line, if so, what command should be run',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'enter your github username',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,`
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
https://github.com/${data.github}
    `)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=>{writeToFile('./dist/README.md',data)})
}

// Function call to initialize app
init();

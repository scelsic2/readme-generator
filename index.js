// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
// const questions = [];

const readmePrompts = [
    {type: "input",
    name: "projectTitle",
    message: "Enter project title:",
    default: "Project Title"},
    
    {type: "input",
    name: "description",
    message: "Enter a description:",
    default: "Description"},

    {type: "input",
    name: "installation",
    message: "Installation:",
    default: ""},

    {type: "input",
    name: "usage",
    message: "Usage:",
    default: ""},

    {type: "checkbox",
    name: "license",
    message: "License:",
    choices: ["MIT", "Other", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "None"],
    validate:(value) => {if (value){return true}else {return "Please select a license."}}},

    {type: "input",
    name: "contributing",
    message: "Contributing:",
    default: ""},

    {type: "input",
    name: "tests",
    message: "Tests:",
    default: ""},

    {type: "input",
    name: "questions",
    message: "Questions:",
    default: ""},

    {type: "input",
    name: "github",
    message: "Github Username:",
    validate:(value) => {if (value){return true}else {return "You must enter a Github username to continue."}}},

    {type: "input",name: "email",
    message: "Email:",
    validate:(value) => {if (value){return true}else {return "You must enter an email address to continue."}}},
]

inquirer.prompt(readmePrompts)
    .then(({
        projectTitle,
        description,
        installation,
        usage,
        license,
        contributing,
        tests,
        questions,
        github,
        email
    }) => {
    const template = `# ${projectTitle}
    ## [Description]
    ${description}

    ## [Table_of_Contents](#tableOfContents)
    * [Installation](#installation)
    * (Usage)(#usage)
    * (License)(#license)
    * (Contributing)(#contributing)
    * (Tests)(#tests)
    * (Questions)(#questions)
    * (Github)(#github)
    * (Email)(#email)
   
    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    ${questions}

    ## Contact
    * Github
    ${github}
    * Email
    ${email}`

    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

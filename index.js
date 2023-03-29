// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

console.log("Respond to the prompts to generate your README.md.")
// TODO: Create an array of questions for user input
// const questions = [];

const readmePrompts = [
    {name: "projectTitle",
    message: "Enter project title:",
    default: "Project Title"},
    
    {name: "description",
    message: "Enter a description:",
    default: "Description"},

    {name: "installation",
    message: "Installation:",
    default: ""},

    {name: "usage",
    message: "Usage:",
    default: ""},

    {type: "checkbox",
    name: "license",
    message: "License:",
    choices: ["MIT", "Other", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "None"],
    validate:(value) => {if (value){return true}else {return "Please select a license."}}},

    {name: "contributing",
    message: "Contributing:",
    default: ""},

    {name: "tests",
    message: "Tests:",
    default: ""},

    {name: "github",
    message: "Github Username:",
    validate:(value) => {if (value){return true}else {return "You must enter a Github username to continue."}}},

    {name: "email",
    message: "Email:",
    validate:(value) => {if (value){return true}else {return "You must enter an email address to continue."}}},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README file has been generated.")

    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(readmePrompts)
    .then(function(userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();

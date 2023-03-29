// https://www.youtube.com/watch?v=o8hkjz1TQuQ
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// https://www.digitalocean.com/community/tutorials/understanding-template-literals-in-javascript
// With template literals, an expression can be embedded in a placeholder. A placeholder is represented by ${}, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string:
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  [![license](https://img.shields.io/badge/License-${data.license}-blueviolet)](https://shields.io)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
 
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For questions, contact me at:
  - Github:
  [${data.github}](http://github.com/${data.github})
  - Email:
  [${data.email}](mailto:${data.email})`
;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    switch (license) {
      case "PERL":
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
      case "SIL":
        return ` [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)]`
      default:
        return "";
  
    }
  }
  
    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    function renderLicenseLink(license) {
      switch (license) {
        case "PERL":
          return `(https://opensource.org/licenses/Artistic-2.0)`
        case "MIT":
          return `(https://opensource.org/licenses/MIT)`
        case "SIL":
          return `(https://opensource.org/licenses/OFL-1.1)`
        default:
          return "";
    
      }
    }
  
    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    function renderLicenseSection(license) {
      // use if or switch
      switch (license) {
        case "PERL":
          return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
        case "MIT":
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
        case "SIL":
          return ` [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)]`
        default:
          return "";
    
      }
    }
  
    // TODO: Create a function to generate markdown for README
    function generateMarkdown(response) {
  
      
      return ` ${renderLicenseBadge(response.license)}
  
      ##${response.title}
  
  
      ## Table of contents
    \n*[Contributing](#contributing)
    \n*[Description](#description)
    \n*[Installation](#installation)
    \n*[Usage](#usage)
    \n*[License](#license)
    \n*[Tests](#tests)
    \n*[Questions](#questions)
    
  ## Description
  ${response.desc}
  ## Installation
  ${response.install}
  ## Usage
  ${response.usage}
  ## License
  
  ${renderLicenseLink(response.license)}
  ## Contributing
  ${response.contribute}
  ## Tests
  ${response.tests}
  ## Questions
  If there are any questions, please email me at: ${response.email},
  or view my GitHub for more work: https://github.com/${response.gitHub}
  `
  
        ;
    }
  
    module.exports = generateMarkdown;
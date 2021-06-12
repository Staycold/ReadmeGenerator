// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please drscribe your project',
      name: 'desc',
    },
    
    {
      type: 'input',
      message: 'How does one install your project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'please provide usage information',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'please select a license',
      name:'license',
      choices: ['MIT', 'PERL', 'SIL']
    },
    {
      type: 'input',
      message: 'please provide details on how to contribute',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'What tests should be run?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please provide your email',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Please provide your GitHub username',
      name: 'gitHub',
    }

];


// TODO: Create a function to write README file


function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}`,data,err=>{
err?console.log(err):console.log('success')
  }
  )}

// TODO: Create a function to initialize app
function init() {


  inquirer.prompt(questions)
.then((response) => {
  console.log(response)
const result= generateMarkdown(response)
writeToFile(`${response.title}.md`,result)
})
}

// Function call to initialize app
init();


// , , Usage, License, Contributing, Tests, and Questions
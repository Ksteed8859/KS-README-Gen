const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


const questions = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Also include the URL to the deployed webpage and screenshots as needed.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license was used for this project?',
        choices: ['None', 'Apache License 2.0', 'GNU Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License 1.0', 'Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators with links to their Github profiles.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'If you would like, write tests for your application here and examples on how to run them.',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Add the link to your Github Profile.',
    },
    { 
        type: 'input',
        name: 'email',
        message: 'Add your email address.'
    },
  ]);
};

const writeToFile = ({title, description, installation, usage, license, credits, test, Github, email}) =>
    `# ${title}

## Description
${description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#test)
- [Contact](#contact)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Test

${test}

## Contact
    
My Github profile can be found at ${Github}.
I can be reached at ${email}.`;

const init = () => {
  questions()

    .then((answers) => writeFile('README.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
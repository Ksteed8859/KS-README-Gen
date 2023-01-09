//Badge for License
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ' ';
  }
}

// Link for License
function renderLicenseLink(license) {
  if(license !== 'None') {
    return `(https://opensource.org/licenses/${license})`
  } else {
    return ' ';
  }
}

//Returns README Section
function renderLicenseSection(license) {}

// Markdown for Readme
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
      
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Test](#test)
  - [Contact](#contact)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  
  ## Test
  
  ${data.test}
  
  ## Contact
      
  My Github profile can be found at ${data.Github}.
  I can be reached at ${data.email}.`;
}

module.exports = generateMarkdown;

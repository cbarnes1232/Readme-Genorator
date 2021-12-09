// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },

      {
        type: "input",
        name: "description",
        message: "What would you like your project to be about?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },

      {
        type: "input",
        name: "tableOfContents",
        message: "What is the title of your project?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },

      {
        type: "input",
        name: "installation",
        message: "how do you install your app?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },

      {
        type: "input",
        name: "Usage",
        message: "what will this project do?",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      // List of Licenses //
      {
        type: "input",
        name: "License",
        message: "what license did you use?",
        choices: ["The MIT License", "The GPL License", "GNU License", "N/A"],
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "Enter your Email",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },

      {
        type: "input",
        name: "git",
        message: "Enter your GitHub Username",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL.",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "i need a value to continue";
          }
        },
      },
    ])
    .then(
      ({
        title,
        description,
        tableOfContents,
        installation,
        usage,
        license,
        email,
        git,
        linkedIn,
      }) => {
        // template to be used //
        const template = `# ${title}
        
 *[installation] {#installation}
 *[Usage] {#usage}
 #Installation
 ${installation}
## usage
 ${usage}
 ### Instructions
${description}
##license 
${license}

#Contact
*Github :${git}
*LinkedIn :${linkedIn}
*E-mail :${email}`;
        createNewFile(title, template);
      }
    );
};
// TODO: Create a function to write README file
function createNewFile(filename, data) {
  //fs
  fs.writeFile('output.md', data, (error) => {console.log(error)});

    // data,
    // (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log("Your README has been generorated.");
    // };
}

// TODO: Create a function to initialize app
function init() {}

promptUser();
// Function call to initialize app
init();

const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./lib/prompts');   // Prompts
const pageCode = require('./lib/pageCode'); // HTML & CSS

// OOP //

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Function to write HTML file //

function writeToFile(fileName, data) {
    fs.writeFile('./dist/' + fileName, data, err => {
        err ? console.error(err)
            : console.log('Webpage Generated! ' + fileName)
    });
}

// This is used to populate the HTML cards //

let cardData = []

// This is the code than handles the prompts that are shown to the user //

/* There are a lot of async and awaits 
    that were used to help the programs flow 
    without these the program would just prompt 
    all at once */

/* 'extra' is used to handle the different 
    cases: for manager it's office number, for
    engineer, it's GitHub, and for intern, its
    school */

async function promptManager() {
    await inquirer.prompt(prompts.managerPrompts)
        .then(res => {
            let newManager = new Manager(res.name, res.id, res.email, res.officeNum);

            cardData.push({
                name: newManager.getName(),
                role: newManager.getRole(),
                id: newManager.getId(),
                email: newManager.getEmail(),
                extra: {
                    key: "Office Number",
                    value: newManager.getOfficeNumber()
                }
            });
        });
}

async function promptEngineer() {
    await inquirer.prompt(prompts.engineerPrompts)
        .then(res => {
            let newEngineer = new Engineer(res.name, res.id, res.email, res.github);

            cardData.push({
                name: newEngineer.getName(),
                role: newEngineer.getRole(),
                id: newEngineer.getId(),
                email: newEngineer.getEmail(),
                extra: {
                    key: "GitHub",
                    value: `<a href="https://github.com/${newEngineer.getGitHub()}" target="_blank">${newEngineer.getGitHub()}</a>`
                }
            });
        });
}

async function promptIntern() {
    await inquirer.prompt(prompts.internPrompts)
        .then(res => {
            let newIntern = new Intern(res.name, res.id, res.email, res.school);

            cardData.push({
                name: newIntern.getName(),
                role: newIntern.getRole(),
                id: newIntern.getId(),
                email: newIntern.getEmail(),
                extra: {
                    key: "School",
                    value: newIntern.getSchool()
                }
            });
        });
}

// Add intern, engineer, or finish //

async function promptMenu() {
    await inquirer.prompt(prompts.menuPrompt)
        .then(async (res) => {
            if (res.output === "engineer")
                await promptEngineer().then(async () => {
                    await promptMenu();
                });
            else if (res.output === "intern")
                await promptIntern().then(async () => {
                    await promptMenu();
                });
        });
}

// Prompt user with questions to fill README //

function init() {

    promptManager().then(() => promptMenu()).then(() => {
        console.log("You have finished entering data, generating web page...");
        writeToFile("index.html", pageCode.html(cardData));
        writeToFile("style.css", pageCode.css);
    });

}

// Start app

init();
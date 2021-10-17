const basePrompts = [
    {
        type: 'input',
        message: 'Enter Name: ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter ID: ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'email',
    },
]

const oneExtraPrompt = (extraPrompt) => {
    let prompts = [...basePrompts];

    prompts.push(extraPrompt);

    return prompts;

}

const managerPrompts = oneExtraPrompt({
    type: 'input',
    message: 'Office Number: ',
    name: 'officeNum',
});

const engineerPrompts = oneExtraPrompt({
    type: 'input',
    message: 'Github Name: ',
    name: 'github',
});

const internPrompts = oneExtraPrompt({
    type: 'input',
    message: 'School Name: ',
    name: 'school',
});

const menuPrompt = [
    {
        type: 'input',
        message: 'Would you like to add an engineer, intern, or finish: ',
        name: 'output',
    }
]

module.exports = {
    managerPrompts: managerPrompts,
    engineerPrompts: engineerPrompts,
    internPrompts: internPrompts,
    menuPrompt: menuPrompt
}

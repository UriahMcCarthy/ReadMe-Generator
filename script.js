const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'appName',
            message: 'What is your app called?'
        },
        {
            type: 'input',
            name: 'appPurpose',
            message: 'What is the need your app is filling?'
        },
        {
            type: 'input',
            name: 'appInterface',
            message: 'What do you see when you open the app?'
        },
        {
            type: 'list',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            name: 'appLicense',
            message: 'What License does this app use?'
        },
        {
            name: 'appTech',
            message: 'What technologies does this app use?'
        },
    ])
    .then((answers) => {
        console.info('Answer:', answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
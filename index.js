import readline from 'readline-sync';
import inquirer from 'inquirer'
import { react } from '@babel/types';
class Person {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID,
        this.email = email;
    }
}

class Manager extends Person {
    constructor(name, ID, email, number) {
        super(name, ID, email);
        this.number = number;
    }

    displayInformation () {
        console.log(`
        name: ${this.name}
        ID: ${this.ID}
        email: ${this.email}
        number: ${this.number}`)
    }
}
class Engineer extends Person {
    constructor(name, ID, email, gitHub) {
        super(name, ID, email);
        this.gitHub = gitHub;
    }
}

class Intern extends Person {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }
}

// On load, enter manager then team manager.
// then prompt for engineer or associaate or finish



// const promptFactory = () => {
    
// }



const finalEmployees = [];

const createEngineer = () => {
    const engineerPrompt = inquirer.createPromptModule();
    engineerPrompt([
    {
        "name": "engineerName",
        "message": "What is the engineer's name?",
        "type": "input"
    },
    {
        "name": "engineerID",
        "message": "What is the engineer's ID?",
        "type": "input"
    },   
    {
        "name": "engineerEmail",
        "message": "What is the engineer's email?",
        "type": "input"
    },   
    {
        "name": "engineerGitHub",
        "message": "What is the engineer's GitHub?",
        "type": "input"
    },
    {
        "name":"whichType",
        "message": "Would you like to input an engineer, intern, or exit?",
        "type": "list",
        "choices": ["Engineer", "Intern", "Quit"]
    }
    ]).then( (answers) => {
        const engineer = new Engineer(
            answers.engineerName, answers.engineerID, 
            answers.engineerEmail, answers.engineerGitHub);
        
        finalEmployees.push(engineer);
        switch (answers.whichType) {
            case "Engineer": 
            createEngineer(finalEmployees);
            break;
            case "Intern":
                createIntern(finalEmployees);
            break;
            case "Quit":
                onQuit(finalEmployees)
        }
    })
}

const createIntern = () => {
    const internPrompt = inquirer.createPromptModule();
    internPrompt([
    {
        "name": "internName",
        "message": "What is the intern's name?",
        "type": "input"
    },
    {
        "name": "internID",
        "message": "What is the intern's ID?",
        "type": "input"
    },   
    {
        "name": "internEmail",
        "message": "What is the intern's email?",
        "type": "input"
    },   
    {
        "name": "internSchool",
        "message": "What is the intern's school?",
        "type": "input"
    },
    {
        "name":"whichType",
        "message": "Would you like to input an engineer, intern, or exit?",
        "type": "list",
        "choices": ["Engineer", "Intern", "Quit"]
    }
]).then( (answers) => {
    const intern = new Intern(answers.internName, 
        answers.internID, answers.internEmail, answers.internSchool);
    
    finalEmployees.push(intern);
    switch (answers.whichType) {
        case "Engineer": 
        createEngineer(finalEmployees);
        break;
        case "Intern":
            createIntern(finalEmployees);
        break;
        case "Quit":
            onQuit(finalEmployees)
    }

}).catch( (err) => {
    console.log(err);
})
}

const onQuit = (employees) => {

}

const loadingQuestion = inquirer.createPromptModule();

console.log("Welcome to your team Builder!")
loadingQuestion([
    {
        "name": "managerName",
        "message": "What is the team manager's name?",
        "type": "input"
    },
    {
        "name": "managerID",
        "message": "What is the team manager's ID?",
        "type": "input"
    },   
    {
        "name": "managerEmail",
        "message": "What is the team manager's email?",
        "type": "input"
    },   
    {
        "name": "managerNumber",
        "message": "What is the team manager's number?",
        "type": "input"
    },
    {
        "name":"whichType",
        "message": "Would you like to input an engineer, intern, or exit?",
        "type": "list",
        "choices": ["Engineer", "Intern", "Quit"]
    }

]).then( (answers) => {
    const teamManager = new Manager(answers.managerName, 
        answers.managerID, answers.managerEmail, answers.managerNumber);
    
    finalEmployees.push(teamManager);
    teamManager.displayInformation();
    // return;
    
    switch (answers.whichType) {
        case "Engineer": 
        createEngineer(finalEmployees);
        break;
        case "Intern":
            createIntern(finalEmployees);
        break;
        case "Quit":
            onQuit(finalEmployees)
    }

}).catch( (err) => {
    console.log(err);
    console.log('An error has occured, please try again')
})






// module.exports = {Manager, Engineer, Intern}
import readline from 'readline-sync';
import inquirer from 'inquirer'
import fs from 'fs';
import $ from 'jquery';
class Person {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID,
        this.email = email;
    }
    displayInformation () {
        console.log(`
        name: ${this.name}
        ID: ${this.ID}
        email: ${this.email}`)
    }
}

class Manager extends Person {
    constructor(name, ID, email, number) {
        super(name, ID, email);
        this.number = number;
        this.type = "Manager";
    }

    displayInformation() {
        super.displayInformation();
        console.log(        `number: ${this.number}`);
    }

}
class Engineer extends Person {
    constructor(name, ID, email, gitHub) {
        super(name, ID, email);
        this.gitHub = gitHub;
        this.type = "Engineer";
    }
    displayInformation() {
        super.displayInformation();
        console.log(`       gitHub: ${this.gitHub}`);
    }
}

class Intern extends Person {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
        this.type = "Intern";
    }
    displayInformation() {
        super.displayInformation();
        console.log(`       school: ${this.school}`);
    }
}

// On load, enter manager then team manager.
// then prompt for engineer or associaate or finish

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

}).catch( (err) => {
    console.log(err);
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
    intern.displayInformation();
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


const html_template = (finalEmployees) => { 
}




const onQuit = () => {
const finalArr = [];
var currRow = [];
var container = "<div class='container'>";
var row = "<div class='row'>";

    for (let i = 0; i < finalEmployees.length; i++ ) {
        let roleLi = ``;

        switch (finalEmployees[i].type) {
    case "Manager":
        roleLi = `<li class='list-group-item>Number: ${finalEmployees[i].number}</li>`
        break;
    case "Engineer":
        roleLi = `<li class='list-group-item>GitHub: ${finalEmployees[i].gitHub}</li>`
        break;
    case "Intern":
        roleLi = `<li class='list-group-item>School: ${finalEmployees[i].school}</li>`
        break;
        }

        if ((i + 1) % 3 == 0) {
            let currentCard =`
<div class='card'>
    <div class='card-body'>
        <h5 class='card-title'>${finalEmployees[i].name}</div>
        <h6 class='card-subtitle'>${finalEmployees[i].type}</div>
        <ul class='list-group'>
            <li class='list-group-item'>ID: ${finalEmployees[i].ID}</li>
            <li class='list-group-item'>Email: ${finalEmployees[i].email}</li>
            ${roleLi}
        </ul>
    </div>
</div>
`           
            row += currentCard;
            row += "</div>";
            container += row;
            console.log(row)
            row = "<div class='row'>";
            continue;
            
        }
        let currentCard =`
<div class='card'>
    <div class='card-body'>
        <h5 class='card-title'>${finalEmployees[i].name}</div>
        <h6 class='card-subtitle'>${finalEmployees[i].type}</div>
        <ul class='list-group'>
            <li class='list-group-item'>ID: ${finalEmployees[i].ID}</li>
            <li class='list-group-item'>Email: ${finalEmployees[i].email}</li>
            ${roleLi}
        </ul>
    </div>
</div>
`
    row += currentCard;
    }
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
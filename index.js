
// const readline = require("readline-sync");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");


const htmlTop = require("./src/htmltemplate.js");
const htmlBottom = require("./src/htmlBottom.js");

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

const onQuit = () => {
const finalArr = [];
var currRow = [];
var container = "<div class='container mt-5'>\n";
var row = "<div class='row mb-3'>";

    for (let i = 0; i < finalEmployees.length; i++ ) {
        let roleLi = ``;

        switch (finalEmployees[i].type) {
    case "Manager":
        roleLi = `<li class='list-group-item'>Number: ${finalEmployees[i].number}</li>`
        break;
    case "Engineer":
        roleLi = `<li class='list-group-item'>GitHub: ${finalEmployees[i].gitHub}</li>`
        break;
    case "Intern":
        roleLi = `<li class='list-group-item'>School: ${finalEmployees[i].school}</li>`
        break;
        }

        if ((i + 1) % 3 == 0) {
            let currentCard =`
<div class='col-3'>
    <div class='card'>
        <div class='card-body'>
            <h5 class='card-title'>${finalEmployees[i].name}</h5>
            <h6 class='card-subtitle'>${finalEmployees[i].type}</h6>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${finalEmployees[i].ID}</li>
                <li class='list-group-item'>Email: ${finalEmployees[i].email}</li>
                ${roleLi}
            </ul>
        </div>
    </div>
</div>
`           
            row += currentCard;
            row += "</div>\n";
            container += row;
            row = "<div class='row mb-3'>";
            continue;
            
        }
        let currentCard =`
<div class='col-3'>
    <div class='card'>
        <div class='card-body'>
            <h5 class='card-title'>${finalEmployees[i].name}</h5>
            <h6 class='card-subtitle'>${finalEmployees[i].type}</h6>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${finalEmployees[i].ID}</li>
                <li class='list-group-item'>Email: ${finalEmployees[i].email}</li>
                ${roleLi}
            </ul>
        </div>
    </div>
</div>
`
    row += currentCard;
    }

    if ( row ) {
        row += "</div>\n"
        container += row;
        container += "</div>"
    } else {
        container += "</div>";
    }


const html = `
${htmlTop}    
${container}
${htmlBottom}
`;

    fs.writeFile("index.html", html, (err) => {
        if (err) {
            console.log('err');
        } else {
            console.log('sucess');
        }
    });



    // for (let i = 0; i < 8; i++) {
    //     if ( ( i + 1 ) % 3 == 0) {
    //         currRow.push(i);
    //         finalArr.push(currRow)
    //         currRow = [];
    //         continue;
    //     }
    //     currRow.push(i);
    // }

    // if (currRow == []) {

    // } else {
    //     finalArr.push(currRow);
    // }
    // console.log(finalArr);
}



console.log("Welcome to your team Builder!");

const loadingQuestion = inquirer.createPromptModule();
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
});

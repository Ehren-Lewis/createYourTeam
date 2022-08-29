import readline from 'readline-sync';
import inquirer from 'inquirer'
import fs from 'fs';
import {Manager, Engineer, Intern} from "./lib/classes.js";

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
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

    ${container}

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="./index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>
</html>`
    fs.writeFile("index.html", html, (err) => {
        if (err) {
            console.log('err');
        } else {
            console.log('sucess');
        }
    })



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






module.exports = {Manager, Engineer, Intern, onQuit, }
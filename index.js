
// required modules for user input and writing files 
const inquirer = require("inquirer");
const fs = require("fs");

// personal classes I defined 
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// From the html template I created 
const htmlTop = require("./src/htmltemplate.js");
const htmlBottom = require("./src/htmlBottom.js");

// global list for easy access and no returns
const finalEmployees = [];

// prompt for engineer, only on call will it run

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
    "message": "What is the engineer's GitHub? (just the username) ",
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

// prompt for intern, only on call will it run
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


// Handles all of input given at the end of the prompts 
const onQuit = () => {

var container = "<div class='container mt-5'>\n";
var row = "<div class='row mb-3'>";

    for (let i = 0; i < finalEmployees.length; i++ ) {
        let roleLi = ``;
        console.log(finalEmployees[i].role);

        switch (finalEmployees[i].role) {
    case "Manager":
        roleLi = `<li class='list-group-item'>Number: ${finalEmployees[i].officeNumber}</li>`
        break;
    case "Engineer":
        roleLi = `<li class='list-group-item'>GitHub: <a class='link-dark' href='https://github.com/${finalEmployees[i].gitHub}' target='_blank'>${finalEmployees[i].gitHub}</a></li>`
        break;
    case "Intern":
        roleLi = `<li class='list-group-item'>School: ${finalEmployees[i].school}</li>`
        break;
        }


        // All template literals are on the first line 
        // due to how template litereals will count spaces in the string 
        if ((i + 1) % 3 == 0) {

            // this is to only allow 3 cards on each row 
            let currentCard =`
<div class='col-3'>
    <div class='card'>
        <div class='card-body'>
            <h5 class='card-title'>${finalEmployees[i].name}</h5>
            <h6 class='card-subtitle mb-1'>${finalEmployees[i].role}</h6>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${finalEmployees[i].ID}</li>
                <li class='list-group-item'>Email: <a href='mailto:${finalEmployees[i].email}' class='list-dark'>${finalEmployees[i].email}</a></li>
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
            <h6 class='card-subtitle mb-1'>${finalEmployees[i].role}</h6>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${finalEmployees[i].ID}</li>
                <li class='list-group-item'>Email: <a href='mailto:${finalEmployees[i].email}' class='link-dark' >${finalEmployees[i].email}</a></li>
                ${roleLi}
            </ul>
        </div>
    </div>
</div>
`
    row += currentCard;
    }


    // if there is anything left in the row, append it to DOM 
    if ( row ) {
        row += "</div>\n"
        container += row;
        container += "</div>"
    } else {
        container += "</div>";
    }


    // html file generation 
    const html = `
${htmlTop}    
${container}
${htmlBottom}
`;

    // writing to the file 
    fs.writeFile("./dist/index.html", html, (err) => {
        if (err) {
            console.log('err');
        } else {
            console.log('sucess');
        }
    });



    // guide using arrays I created 
    // to more easily create the code above with html elements 
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



// Runs on app initialization 
// Team manager will always be called so it is first 
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

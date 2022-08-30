const Employee = require("./Employee.js");



class Engineer extends Employee {
    constructor(name, ID, email, gitHub) {
        super(name, ID, email);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }
    displayInformation() {
        super.displayInformation();
        console.log(`       gitHub: ${this.gitHub}`);
    }

}

module.exports = Engineer 
const Employee = require("./Employee.js");



class Engineer extends Employee {
    constructor(name, ID, email, gitHub) {
        super(name, ID, email);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }

    // all display informations display the Employee display 
    // as well as their individual property 
    displayInformation() {
        super.displayInformation();
        console.log(`       gitHub: ${this.gitHub}`);
    }
    
    // displayes the individual propery per subclass 
    getgitHub() {
        return this.gitHub;
    }

}

module.exports = Engineer 
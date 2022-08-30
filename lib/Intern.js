const Employee = require("./Employee.js");


class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
        this.role = "Intern";
    }

    // all display informations display the Employee display 
    // as well as their individual property 
    displayInformation() {
        super.displayInformation();
        console.log(`       school: ${this.school}`);
    }


    // displayes the individual propery per subclass 
    getSchool() {
        return this.school;
    }

}

module.exports = Intern
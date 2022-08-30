const Employee = require("./Employee.js");


class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
        this.role = "Intern";
    }
    displayInformation() {
        super.displayInformation();
        console.log(`       school: ${this.school}`);
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern
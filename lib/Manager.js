const Employee = require("./Employee.js");


class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    displayInformation() {
        super.displayInformation();
        console.log(        `office number: ${this.officeNumber}`);
    }
}

module.exports = Manager 
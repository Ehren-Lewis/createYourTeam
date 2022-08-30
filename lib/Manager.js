const Employee = require("./Employee.js");


class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    // all display informations display the Employee display 
    // as well as their individual property 
    displayInformation() {
        super.displayInformation();
        console.log(        `office number: ${this.officeNumber}`);
    }

    // displayes the individual propery per subclass 
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager 
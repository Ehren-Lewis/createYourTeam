class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID,
        this.email = email;

        // Instead of having there be a getRole function each time
        // I instead decided to add a property for each role 
        // and only the parent has the role 
        // This way, if more roles were added (marketer), it would
        // be easier to scale  
        this.role = 'Employee';
    }

    testingInput () {
        if ( typeof this.name != "string" || this.name.length <= 0) {
            throw new Error("Pleas input a proper name")
        } else if (typeof this.ID != "number") {
            throw new Error("Please input an ID as a number")
        } else if (typeof this.email !="string" || this.email.length <= 0) {
            throw new Error("Please input a proper email");
        }
    }

    displayInformation () {
        console.log(`
        name: ${this.name}
        ID: ${this.ID}
        email: ${this.email}`)
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

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
// class Engineer extends Employee {
//     constructor(name, ID, email, gitHub) {
//         super(name, ID, email);
//         this.gitHub = gitHub;
//         this.role = "Engineer";
//     }
//     displayInformation() {
//         super.displayInformation();
//         console.log(`       gitHub: ${this.gitHub}`);
//     }

// }

// class Intern extends Employee {
//     constructor(name, ID, email, school) {
//         super(name, ID, email);
//         this.school = school;
//         this.role = "Intern";
//     }
//     displayInformation() {
//         super.displayInformation();
//         console.log(`       school: ${this.school}`);
//     }

//     getSchool() {
//         return this.school;
//     }

// }


// const me = new Intern('h', 2, 2);

// const team = { Manager, Engineer, Intern }
// export default team

module.exports = Employee 
// export default Employee
// import Employee from "../lib/classes.js";
// const {Employee, Manager, Engineer, Intern } = team;
const Employee  = require("../lib/Employee.js");

describe("Initialization", () => {
    it("Checks to see if object is an instance of the Employee class", ()=> {

        const firstEmployee =  new Employee();

        expect(firstEmployee instanceof Employee).toEqual(true);
        
    });
})

describe("Get Name", ()=> {
    it("Should return the correct name given during instantiation", () => {
        const employeeNameTest = new Employee("Freddy", 100213, "FredGuilly@gmail.com");

        const result = employeeNameTest.getName();

        expect(employeeNameTest.name).toEqual(result);
    })
})

describe("Get ID", ()=> {
    it("Should return the correct ID given during instantiation", () => {
        const employeeIDTest = new Employee("Freddy", 100213, "FredGuilly@gmail.com");

        const result = employeeIDTest.getID();

        expect(employeeIDTest.ID).toEqual(result);
    })
})

describe("Get Email", ()=> {
    it("Should return the correct email given during instantiation", () => {
        const employeeEmailTest = new Employee("Freddy", 100213, "FredGuilly@gmail.com");

        const result = employeeEmailTest.getEmail();

        expect(employeeEmailTest.email).toEqual(result);
    })
})

describe("Get role", ()=> {
    it("Should return the correct role given during instantiation", () => {
        const employeeRoleTest = new Employee("Freddy", 100213, "FredGuilly@gmail.com");

        const result = employeeRoleTest.getRole();

        expect(employeeRoleTest.role).toEqual(result);
    })
})
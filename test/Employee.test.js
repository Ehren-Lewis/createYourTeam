// import Employee from "../lib/classes.js";
// const {Employee, Manager, Engineer, Intern } = team;
const Employee  = require("../lib/Employee.js");

describe("Initialization", () => {
    it("Checks to see if object is an instance of the Employee class", ()=> {
        // Assign

        const firstEmployee =  new Employee();
        // Assert

        expect(firstEmployee instanceof Employee).toEqual(true);
        
        // Act
    });
})

// describe("Get Name", ()=> {
//     it("Should return the correct name when given during instantiation", () => {
//         const employeeNameTest = new Employee("Freddy", 100213, "FredGuilly@gmail.com");


//     })
// })

// describe("Get ID", ()=> {
//     it("Should return the correct name ID given during instantiation", () => {
        
//     })
// })

// describe("Should return the correct email when given during instantiation", ()=> {
//     it(" ", () => {
        
//     })
// })

// describe("Should return the correct role when given during instantiation", ()=> {
//     it(" ", () => {
        
//     })
// })
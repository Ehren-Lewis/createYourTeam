// import  team from "../lib/classes.js";
// const {Employee, Manager, Engineer, Intern } = team;
const  Intern  = require("../lib/Intern.js");

describe("Initialization", () => {
    it("Checks to see if object is an isntance of the Intern class", ()=> {
        // Assign

        const firstIntern = new Intern();
        // Assert

        expect(firstIntern instanceof Intern).toEqual(true);
        
        // Act
    });
})
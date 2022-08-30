// import  team from "../lib/classes.js";
// const {Employee, Manager, Engineer, Intern } = team;
const  Engineer = require("../lib/Engineer.js");

describe("Initialization", () => {
    it("Checks to see if object is an isntance of the Engineer class", ()=> {
        // Assign

        const firstEngineer =  new Engineer();
        // Assert

        expect(firstEngineer instanceof Engineer).toEqual(true);
        
        // Act
    });
})
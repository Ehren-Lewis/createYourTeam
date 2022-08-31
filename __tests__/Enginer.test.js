// import  team from "../lib/classes.js";
// const {Engineer, Manager, Engineer, Intern } = team;
const  Engineer = require("../lib/Engineer.js");

describe("Initialization", () => {
    it("Checks to see if object is an instance of the Engineer class", ()=> {

        const firstEngineer =  new Engineer();

        expect(firstEngineer instanceof Engineer).toEqual(true);
        
    });
})

describe("Get Name", ()=> {
    it("Should return the correct name given during instantiation", () => {
        const engineerNameTest = new Engineer("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = engineerNameTest.getName();

        expect(engineerNameTest.name).toEqual(result);
    })
})

describe("Get ID", ()=> {
    it("Should return the correct ID given during instantiation", () => {
        const engineerIDTest = new Engineer("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = engineerIDTest.getID();

        expect(engineerIDTest.ID).toEqual(result);
    })
})

describe("Get Email", ()=> {
    it("Should return the correct email given during instantiation", () => {
        const engineerEmailTest = new Engineer("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = engineerEmailTest.getEmail();

        expect(engineerEmailTest.email).toEqual(result);
    })
})

describe("Get role", ()=> {
    it("Should return the correct role given during instantiation", () => {
        const engineerRoleTest = new Engineer("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = engineerRoleTest.getRole();

        expect(engineerRoleTest.role).toEqual(result);
    })
})

describe("Get GitHub", ()=> {
    it("Should return the correct gitHub given during instantiation", () => {
        const engineerGitHubTest = new Engineer("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = engineerGitHubTest.getgitHub();

        expect(engineerGitHubTest.gitHub).toEqual(result);
    })
})
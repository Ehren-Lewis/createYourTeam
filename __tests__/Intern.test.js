// import  team from "../lib/classes.js";
// const {Employee, Manager, Intern, Intern } = team;
const  Intern  = require("../lib/Intern.js");

describe("Initialization", () => {
    it("Checks to see if object is an instance of the Intern class", ()=> {

        const firstIntern =  new Intern();

        expect(firstIntern instanceof Intern).toEqual(true);
        
    });
})

describe("Get Name", ()=> {
    it("Should return the correct name given during instantiation", () => {
        const internNameTest = new Intern("Freddy", 100213, "FredGuilly@gmail.com", "University of Denver");

        const result = internNameTest.getName();

        expect(internNameTest.name).toEqual(result);
    })
})

describe("Get ID", ()=> {
    it("Should return the correct ID given during instantiation", () => {
        const internIDTest = new Intern("Freddy", 100213, "FredGuilly@gmail.com", "University of Denver");

        const result = internIDTest.getID();

        expect(internIDTest.ID).toEqual(result);
    })
})

describe("Get Email", ()=> {
    it("Should return the correct email given during instantiation", () => {
        const internEmailTest = new Intern("Freddy", 100213, "FredGuilly@gmail.com", "University of Denver");

        const result = internEmailTest.getEmail();

        expect(internEmailTest.email).toEqual(result);
    })
})

describe("Get role", ()=> {
    it("Should return the correct role given during instantiation", () => {
        const internRoleTest = new Intern("Freddy", 100213, "FredGuilly@gmail.com", "University of Denver");

        const result = internRoleTest.getRole();

        expect(internRoleTest.role).toEqual(result);
    })
})

describe("Get School", ()=> {
    it("Should return the correct school given during instantiation", () => {
        const InternSchoolTest = new Intern("Freddy", 100213, "FredGuilly@gmail.com", "University of Denver");

        const result = InternSchoolTest.getSchool();

        expect(InternSchoolTest.school).toEqual(result);
    })
})
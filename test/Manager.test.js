const  Manager  = require("../lib/Manager.js");

describe("Initialization", () => {
    it("Checks to see if object is an instance of the Manager class", ()=> {

        const firstManager =  new Manager();

        expect(firstManager instanceof Manager).toEqual(true);
        
    });
})

describe("Get Name", ()=> {
    it("Should return the correct name given during instantiation", () => {
        const managerNameTest = new Manager("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = managerNameTest.getName();

        expect(managerNameTest.name).toEqual(result);
    })
})

describe("Get ID", ()=> {
    it("Should return the correct ID given during instantiation", () => {
        const managerIDTest = new Manager("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = managerIDTest.getID();

        expect(managerIDTest.ID).toEqual(result);
    })
})

describe("Get Email", ()=> {
    it("Should return the correct email given during instantiation", () => {
        const managerEmailTest = new Manager("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = managerEmailTest.getEmail();

        expect(managerEmailTest.email).toEqual(result);
    })
})

describe("Get role", ()=> {
    it("Should return the correct role given during instantiation", () => {
        const managerRoleTest = new Manager("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = managerRoleTest.getRole();

        expect(managerRoleTest.role).toEqual(result);
    })
})

describe("Get Office Number", ()=> {
    it("Should return the correct office number given during instantiation", () => {
        const managerOfficNumber = new Manager("Freddy", 100213, "FredGuilly@gmail.com", "Fred-Guilly");

        const result = managerOfficNumber.getOfficeNumber();

        expect(managerOfficNumber.officeNumber).toEqual(result);
    })
})
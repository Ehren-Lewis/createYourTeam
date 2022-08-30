const  Manager  = require("../lib/Manager.js");

describe("Initialization", () => {
    it("Checks to see if object is an isntance of the Manager class", ()=> {
        // Assign

        const firstManager = new Manager();
        // Assert

        expect(firstManager instanceof Manager).toEqual(true);
        
        // Act
    });
})
const Manager = require('../lib/Manager');

describe('Test functionality of Manager class', () => {

    // Intern (name, id, email, office number) //
    let employee1 = new Manager("Eric", "10", "ericv@gmail.com", "10")
    let employee2 = new Manager("Sam", "11", "Sammyg1@gmail.com", "2")

    //Intern Tests //
    it('Returns the office number section of the class', () => {
        expect(employee1.getOfficeNumber()).toBe("10");
        expect(employee2.getOfficeNumber()).toBe("2");
    });

    it('Returns the role section of the class', () => {
        expect(employee1.getRole()).toBe("☕ Manager");
        expect(employee2.getRole()).toBe("☕ Manager");
    });

    // Employee tests (super class) //

    it('Returns the name section of the class', () => {
        expect(employee1.getName()).toBe("Eric");
        expect(employee2.getName()).toBe("Sam");
    });

    it('Returns the ID section of the class', () => {
        expect(employee1.getId()).toBe("10");
        expect(employee2.getId()).toBe("11");
    });

    it('Returns the Email section of the class', () => {
        expect(employee1.getEmail()).toBe("ericv@gmail.com");
        expect(employee2.getEmail()).toBe("Sammyg1@gmail.com");
    });

});

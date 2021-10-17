const Intern = require('../lib/Intern');

describe('Test functionality of Intern class', () => {

    // Intern (name, id, email, school) //
    let employee1 = new Intern("Eric", "10", "ericv@gmail.com", "UMN")
    let employee2 = new Intern("Sam", "11", "Sammyg1@gmail.com", "Normandale")

    //Intern Tests //
    it('Returns the school section of the class', () => {
        expect(employee1.getSchool()).toBe("UMN");
        expect(employee2.getSchool()).toBe("Normandale");
    });

    it('Returns the role section of the class', () => {
        expect(employee1.getRole()).toBe("👨‍🎓 Intern");
        expect(employee2.getRole()).toBe("👨‍🎓 Intern");
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

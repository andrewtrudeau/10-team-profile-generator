const Engineer = require('../lib/Engineer');

describe('Test functionality of Engineer class', () => {

    // Intern (name, id, email, GitHub) //
    let employee1 = new Engineer("Eric", "10", "ericv@gmail.com", "eric-the-great")
    let employee2 = new Engineer("Sam", "11", "Sammyg1@gmail.com", "sam1")

    //Intern Tests //
    it('Returns the GitHub section of the class', () => {
        expect(employee1.getGitHub()).toBe("eric-the-great");
        expect(employee2.getGitHub()).toBe("sam1");
    });

    it('Returns the role section of the class', () => {
        expect(employee1.getRole()).toBe("🚀 Engineer");
        expect(employee2.getRole()).toBe("🚀 Engineer");
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

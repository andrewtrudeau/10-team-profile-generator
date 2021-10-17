const Employee = require('../lib/Employee');

describe('Test functionality of Employee class', () => {

  // Employee (name, id, email) //
  let employee1 = new Employee("Eric", "10", "ericv@gmail.com")
  let employee2 = new Employee("Sam", "11", "Sammyg1@gmail.com")

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

  it('Returns the role section of the class', () => {
    expect(employee1.getRole()).toBe("✏ Employee");
    expect(employee2.getRole()).toBe("✏ Employee");
  });

});

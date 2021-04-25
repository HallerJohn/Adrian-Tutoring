const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test('Manager class properly setup', () =>{
    const manager = new Manager("John", 123, "John@gmail.com", 520);
    expect(manager).toEqual({
        name: "John",
        id: 123,
        email: "John@gmail.com",
        officeNumber: 520,
        role: "Manager"
    });
    expect(manager.getName()).toBe("John");
    expect(manager.getEmail()).toBe("John@gmail.com");
    expect(manager.getId()).toBe(123);
    expect(manager.getRole()).toBe("Manager");
    expect(manager.getOffice()).toBe(520);
});
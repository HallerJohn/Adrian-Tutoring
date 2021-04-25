const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('Employee class properly setup', () =>{
    const employee1 = new Employee("John", 123, "John@gmail.com");
    expect(employee1).toEqual({
        name: "John",
        id: 123,
        email: "John@gmail.com",
        role: "Employee"
    });
    expect(employee1.getName()).toBe("John");
    expect(employee1.getEmail()).toBe("John@gmail.com");
    expect(employee1.getId()).toBe(123);
    expect(employee1.getRole()).toBe("Employee");
});